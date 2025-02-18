import React from "react";
import moment from "moment";
import { Layout, Table, Tag, message, Popconfirm, Divider } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import loadingPage from "../../../asset/img/Wedges-3s-200px.svg";
import LeftNavbar from "../../Layout/LeftNavbar";
import Navbar from "../../Layout/Navbar";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_BANNER } from "../../../graphql/query";
import { DELETE_BANNER } from "../../../graphql/mutation";
import { Link } from "react-router-dom";

const { Content } = Layout;
const AllBanner = () => {
  const [deleteBanner] = useMutation(DELETE_BANNER);
  const { loading, error, data, refetch } = useQuery(GET_ALL_BANNER);
  console.log(data);
  if (error) return `Error! ${error.message}`;
  const columns = [
    {
      title: "Banner",
      dataIndex: "banner",
      key: "banner",
      render: (data) => {
        return (
          <img
            alt="img"
            src={"http://localhost:8080/" + data}
            height="40px"
            width="40px"
          />
        );
      },
    },
    {
      title: "Page",
      dataIndex: "page",
      key: "banner",
      render: (page) => {
        return page.namePage;
      },
    },
    {
      title: "CreateBy",
      dataIndex: "user",
      key: "create_by",
      render: (user) => {
        return user.name;
      },
    },
    {
      title: "Date",
      dataIndex: "createAt",
      key: "date",
      render: (data) => {
        return moment.unix(data / 1000).format("YYYY-MM-DD");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (index, data) => {
        const { id } = data;
        console.log("id", id);
        return (
          <div>
            <Link to={`/admin/editbanner/${id}`}>
              <Tag style={{ cursor: "pointer" }} color="rgb(1, 100, 145)">
                <EditOutlined />
                Edit
              </Tag>
            </Link>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteBanner({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteBanner.message);
                    await refetch();
                  })
                  .catch((error) => {
                    console.log(error);
                    return null;
                  });
              }}
            >
              <Tag color="rgb(255, 0, 0)" style={{ cursor: "pointer" }}>
                <DeleteOutlined /> Delete
              </Tag>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const DisplayForm = () => {
    if (loading)
      return (
        <center>
          <img
            alt="img"
            style={{ height: "80px", marginTop: "200px" }}
            src={loadingPage}
          />
        </center>
      );
    refetch();
    return <Table columns={columns} dataSource={data.allBanner} />;
  };
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content>
            <div className="site-layout-background">
              <h1 className="title-top">All Banners</h1>
              <DisplayForm />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AllBanner;
