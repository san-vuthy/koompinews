import React, { useState } from "react";
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  Select,
  Space,
  Tag,
  Table,
  message,
  Popconfirm,
  Divider,
} from "antd";
import LeftNavbar from "../../../Layout/LeftNavbar";
import Navbar from "../../../Layout/Navbar";
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useMutation, useQuery } from "@apollo/client";
import {
  // ADD_JOB_CATEGORY,
  DELETE_JOB_CATEGORY,
  // UPDATE_JOB_CATEGORY,
} from "../../../../graphql/mutation";
import {
  GET_JOB_CATEGORY,
  GET_A_JOB_CATEGORY,
} from "../../../../graphql/query";
import AddJobCategory from "./AddJobCategory";

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const Category = () => {
  // const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_JOB_CATEGORY);
  // const [addJobCategory] = useMutation(ADD_JOB_CATEGORY);
  const [deleteJobCategory] = useMutation(DELETE_JOB_CATEGORY);
  // const [updateJobCategory] = useMutation(UPDATE_JOB_CATEGORY);
  if (loading) return "Loading...";
  console.log(data);
  if (error) return `Error! ${error.message}`;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const isEdit = () => {
    setEdit(false);
  };
  const cancel = (e) => {
    console.log(e);
    message.error("The author does not deleted");
  };
  // const onFinish = (value) => {
  //   addJobCategory({
  //     variables: {
  //       ...value,
  //       userId: '5f3e65128c70fe65b27d5c7f',
  //     },
  //   }).then(async (res) => {
  //     await message.success(res.data.addJobCategory.message);
  //     await refetch();
  //     form.resetFields();
  //   });
  //   console.log('success', value);
  // };

  const columns = [
    {
      title: "Name of Categories",
      dataIndex: "name",
      key: "jobcategories",
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
      title: "Create At",
      dataIndex: "createAt",
      key: "create_at",
      render: (data) => {
        return moment.unix(data / 1000).format("YYYY-MM-DD");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (index, data) => {
        // const { id } = data;
        // console.log('id', id);
        return (
          <Space>
            {/* <Link to={`/admin/editjob/${id}`}> */}
            <Tag
              onClick={() => {
                setEdit(true);
                setId(`${id}`);
              }}
              style={{ cursor: "pointer" }}
              color="rgb(1, 100, 145)"
            >
              <EditOutlined /> Edit
            </Tag>
            {/* </Link> */}
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this News?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteJobCategory({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteJobCategory.message);
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
          </Space>
        );
      },
    },
  ];

  return (
    <React.Fragment>
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
              height: "300px",
              flex: "none",
            }}
          >
            <div className="site-layout-background">
              <AddJobCategory
                isEdit={edit}
                changeEdit={isEdit}
                JobCateId={id}
              />
              {/* <h1 className="title-top">Add Job JobCategories</h1>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Name Categories"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Categories name!',
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Button
                  size="large"
                  className="button-submit"
                  type="primary"
                  htmlType="submit"
                  //   style={{ marginTop: '70px' }}
                >
                  Submit
                </Button>
              </Form> */}
            </div>
          </Content>
          <Content
            style={{
              margin: "16px 16px",
              backgroundColor: "#fff",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="site-layout-background">
              <h1 className="title-top">Display JobCategories</h1>
              <Table
                columns={columns}
                dataSource={data.allJobCategories}
                loading={false}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Category;
