import React, { useState } from "react";
import { Layout, Form, Button, Upload, message, Select } from "antd";
import buttonLoading from "../../../asset/img/three-dots.svg";
import LeftNavbar from "../../Layout/LeftNavbar";
import Navbar from "../../Layout/Navbar";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_BANNER } from "../../../graphql/mutation";
import { GET_ALL_PAGE_BANNER } from "../../../graphql/query";

const { Content } = Layout;
const { Option } = Select;
const AddBanner = () => {
  const [addBanner] = useMutation(ADD_BANNER);
  const [image, setImage] = useState("");
  const [loading1, setLoading] = useState(false);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (e) => {
    console.log(e);
  };
  const onFinish = (value) => {
    addBanner({
      variables: {
        ...value,

        banner: image,
        userId: "5f324067aeef78b4df13ca54",
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.addBanner.message);
      //   form.resetFields();
    });
    console.log("success", value);
  };
  const uploadImage = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload",

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setImage(info.file.name.replace(/\s+/g, "-").toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  function DisplayPage() {
    const { loading, error, data } = useQuery(GET_ALL_PAGE_BANNER);

    if (loading) return "Loading...";
    console.log(data);
    if (error) return `Error! ${error.message}`;
    return (
      <Form.Item
        rules={[{ required: true, message: "Page is required" }]}
        label="Page"
        name="page"
      >
        <Select
          size="large"
          className="event-select"
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Page"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data.allPage.map((res) => {
            return <Option value={res.id}>{res.namePage}</Option>;
          })}
        </Select>
      </Form.Item>
    );
  }
  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content>
            <div className="site-layout-background">
              <h1 className="title-top">Add Banner</h1>
              <Form
                // form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Banner"
                  name="image"
                  rules={[{ required: true, message: "Please input image" }]}
                >
                  <Upload.Dragger {...uploadImage}>
                    {image === "" ? (
                      <img
                        style={{ width: "270px" }}
                        src="http://localhost:8080/undraw_upload_87y9.svg"
                        alt="avatar"
                      />
                    ) : (
                      <img
                        style={{ width: "270px" }}
                        src={`${"http://localhost:8080/" + image}`}
                        // src="http://localhost:8080/Technology-Images-Wallpapers-027.jpg"
                        alt="avatar"
                      />
                    )}
                  </Upload.Dragger>
                </Form.Item>
                <DisplayPage />
                <Button
                  style={{ marginTop: "0px", width: "150px" }}
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
                  {loading1 ? (
                    <img src={buttonLoading} alt="btn-loading" height="10" />
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AddBanner;
