import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Navbar = () => {
  return (
    <React.Fragment>
      <Header className="header" style={{ padding: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item style={{ float: "right" }} key="1">
            nav 1
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} key="2">
            nav 2
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} key="3">
            nav 3
          </Menu.Item>
        </Menu>
      </Header>
    </React.Fragment>
  );
};

export default Navbar;
