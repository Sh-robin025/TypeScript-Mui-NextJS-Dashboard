import { ComponentType } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import {
  AppBar,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";

type MyT = ComponentType<typeof ListItem>;

export const DrawerItem: MyT = styled(ListItem)`
  flex-direction: column;
  height: 74px;
  border-radius: 5px;
  margin-bottom: 5px;
  .hide {
    display: none;
  }
  &:hover {
    background: #7d48b1;
    .hide {
      display: block;
    }
  }
`;

export const DrawerItems = styled(List)`
  width: 94px;
  margin: 0 auto;
`;

export const Logo = styled(Typography)`
  margin: auto;
  font-weight: bold;
  font-size: 30px;
`;

export const AppBarComp = styled(AppBar)`
  background: #f1f3f4;
`;

export const SearchField = styled(TextField)`
  width: 503px;
  height: 50px;
`;
