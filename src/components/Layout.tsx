import { FC, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import { Drawer, Toolbar, Typography } from "@material-ui/core";
import {
  DrawerItems,
  DrawerItem,
  Logo,
  AppBarComp,
  SearchField,
} from "../../styles/Layout";
// components
import Copyright from "../Copyright";
// icons
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import CardTravelOutlinedIcon from "@material-ui/icons/CardTravelOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import { IChildren, IMenuItem } from "../util/interfaces";

const drawerWidth = 120;

const Layout: FC<IChildren> = ({ children }) => {
  const menuItems: Array<IMenuItem> = [
    {
      text: "Dashboard",
      icon: <AssessmentIcon sx={{ fontSize: 45 }} />,
      path: "/",
    },
    {
      text: "Table",
      icon: <TableChartOutlinedIcon sx={{ fontSize: 45 }} />,
      path: "/table",
    },
    {
      text: "Task",
      icon: <AssignmentOutlinedIcon sx={{ fontSize: 45 }} />,
      path: "/task",
    },
    {
      text: "Jobs",
      icon: <CardTravelOutlinedIcon sx={{ fontSize: 45 }} />,
      path: "/notes",
    },
    {
      text: "Files",
      icon: <FolderOpenOutlinedIcon sx={{ fontSize: 45 }} />,
      path: "/files",
    },
  ];

  const router: NextRouter = useRouter();
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setPath(path);
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarComp
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <SearchField
            id="outlined-basic"
            label="🔍Search"
            variant="outlined"
          />
        </Toolbar>
      </AppBarComp>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#663399",
            color: "#fff",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Logo>Gull</Logo>
        </Toolbar>

        <DrawerItems>
          {menuItems.map((item: IMenuItem) => (
            <DrawerItem
              key={item.text}
              button
              onClick={() => router.push(item.path)}
              sx={
                path === item.path && {
                  background: "#7D48B1",
                }
              }
            >
              {item.icon}
              <Typography
                variant="caption"
                className={path === item.path ? "" : "hide"}
              >
                {item.text}
              </Typography>
            </DrawerItem>
          ))}
        </DrawerItems>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
        <Copyright />
      </Box>
    </Box>
  );
};
export default Layout;

// Type '{ children: Element[]; key: string; button: true; onClick: () => Promise<boolean>; sx: false | { background: string; }; }' is not assignable to type 'IntrinsicAttributes & ((props: { href: string; } & { button: true; } & ListItemBaseProps & { components?: { Root?: ElementType<any> | undefined; } | undefined; componentsProps?: { ...; } | undefined; } & Omit<...> & CommonProps & Omit<...>) => Element) & OverridableComponent<...> & OverridableComponent<...> & { ...; }'.
//   Property 'button' does not exist on type 'IntrinsicAttributes & ((props: { href: string; } & { button: true; } & ListItemBaseProps & { components?: { Root?: ElementType<any> | undefined; } | undefined; componentsProps?: { ...; } | undefined; } & Omit<...> & CommonProps & Omit<...>) => Element) & OverridableComponent<...> & OverridableComponent<...> & { ...; }'
