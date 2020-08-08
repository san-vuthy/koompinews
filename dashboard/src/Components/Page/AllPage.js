import React from "react";
import { Layout } from "antd";
import LeftNavbar from "../Layout/LeftNavbar";
import Navbar from "../Layout/Navbar";

const { Content } = Layout;
const AllPage = () => {
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: "16px 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              fehf
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AllPage;
