import React from "react";
import "./style.css";
import { Layout } from "antd";
import routes from "../routes";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { withRouter } from "react-router";
import Content from "./Content";
import Navbar from "./Navbar";

const LayoutComponent: React.FC<{}> = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar routes={routes} />
      <Layout>
        <Navbar />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default withRouter(LayoutComponent);
