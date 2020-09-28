import React from "react";
import { Layout, Card } from "antd";
import loadingPage from "../../../asset/img/Wedges-3s-200px.svg";
import { useQuery } from "@apollo/client";
import { GET_A_CV } from "../../../graphql/query";
import LeftNavbar from "../../Layout/LeftNavbar";
import Navbar from "../../Layout/Navbar";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const PreviewCv = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_A_CV, {
    variables: { id },
  });
  if (loading) {
    return (
      <center>
        <img
          alt="img"
          style={{ height: "80px", marginTop: "200px" }}
          src={loadingPage}
        />
      </center>
    );
  }
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content
            style={{
              margin: "16px 16px",
              backgroundColor: "#fff",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              //   height: '300px',
              flex: "none",
            }}
          >
            <div className="site-layout-background">
              <center>
                <h1>Information of {data.aCv.firstname}</h1>
              </center>
              <Card
                type="inner"
                style={{ marginTop: "12px" }}
                title="Firstname"
              >
                <div>
                  <span style={{ font: "bold" }}>{data.aCv.firstname}</span>
                </div>
              </Card>
              <Card type="inner" style={{ marginTop: "12px" }} title="Lastname">
                <div>
                  <span>{data.aCv.lastname}</span>
                </div>
              </Card>
              <Card type="inner" style={{ marginTop: "12px" }} title="Email">
                <div>
                  <span>{data.aCv.email}</span>
                </div>
              </Card>
              <Card type="inner" style={{ marginTop: "12px" }} title="Position">
                <div>
                  <span>{data.aCv.position}</span>
                </div>
              </Card>
              <Card
                type="inner"
                style={{ marginTop: "12px" }}
                title="Additional"
              >
                <div>
                  <span>{data.aCv.additional}</span>
                </div>
              </Card>
              <Card type="inner" style={{ marginTop: "12px" }} title="CV">
                <div>
                  <img
                    alt="img"
                    style={{ height: "100px" }}
                    src={"http://localhost:8080/" + data.aCv.file}
                  />
                </div>
              </Card>
              {/* <ul>
                <h1>name</h1>
                <li>
                  <span>{data.aCv.firstname}</span>
                </li>
                <h1>name</h1>
                <li>
                  <span>{data.aCv.lastname}</span>
                </li>
              </ul> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default PreviewCv;
