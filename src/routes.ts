import {
  HomeOutlined,
  LaptopOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import AddUser from "./pages/user/Add";
import ListUser from "./pages/user/List";

export interface RouteProps {
  uri: string;
  label: string;
  Icon: React.ForwardRefExoticComponent<any>;
  sub?: RouteProps[];
  Component: React.FC<any>;
}

const routes = [
  {
    uri: "/",
    label: "Home",
    Icon: HomeOutlined,
    Component: Dashboard,
  },
  {
    uri: "/about",
    label: "About",
    Icon: LaptopOutlined,
    Component: About,
  },
  {
    label: "User",
    uri: "/users",
    Icon: UserOutlined,
    sub: [
      {
        label: "List",
        uri: "/list",
        Icon: UnorderedListOutlined,
        Component: ListUser,
      },
      {
        label: "Add",
        uri: "/add",
        Icon: UserAddOutlined,
        Component: AddUser,
      },
    ],
  },
] as RouteProps[];

export default routes;
