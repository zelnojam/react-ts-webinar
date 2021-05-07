import React from "react";
import { Layout } from "antd";
import "./style.css";

const Footer: React.FC<{}> = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      React Tutorial @JRU 2021
    </Layout.Footer>
  );
};

export default Footer;
