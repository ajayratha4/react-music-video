import Home from "screen/Home";

export interface RoutesItem {
  title: string;
  path: string;
  component: any;
  isUuthorized: boolean;
}

export const ROUTES = [
  {
    title: "Home",
    path: "/",
    component: Home,
    isUuthorized: false,
  },
];
