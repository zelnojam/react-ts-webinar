import React from "react";
import { Layout } from "antd";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return <Layout.Header style={{ backgroundColor: "white" }} />;
};

export default Navbar;
