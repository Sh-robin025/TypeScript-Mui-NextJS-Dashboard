export interface IChildren {
  children: () => JSX.Element;
}

export interface IMenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}
