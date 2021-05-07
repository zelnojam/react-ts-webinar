import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { RouteProps } from "../routes";
import { CoffeeOutlined } from "@ant-design/icons";

interface SidebarProps {
  routes: RouteProps[];
}

const LinkStyle = {
  color: "inherit",
  transition: "0s all",
};

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <Layout.Sider
      style={{ minHeight: "100vh" }}
      collapsible
      collapsed={collapse}
      onCollapse={() => setCollapse(!collapse)}
    >
      <div
        style={{
          color: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: collapse ? "center" : "space-around",
          alignItems: "end",
        }}
      >
        <CoffeeOutlined style={{ fontSize: "2rem" }} />
        {collapse ? null : <h2 style={{ color: "inherit" }}>Code Brewers</h2>}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[pathname]}
        style={{ height: "inherit" }}
        theme="dark"
      >
        {routes.map((value) =>
          Array.isArray(value.sub) ? (
            <Menu.SubMenu
              title={value.label}
              icon={<value.Icon />}
              key={value.uri}
            >
              {value.sub.map(({ uri, label, Icon }) => (
                <Menu.Item
                  icon={<Icon />}
                  title={value.label}
                  key={`${value.uri}${uri}`}
                >
                  <Link to={`${value.uri}${uri}`} style={LinkStyle}>
                    {label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item icon={<value.Icon />} key={value.uri}>
              <Link to={value.uri} style={LinkStyle}>
                {value.label}
              </Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
