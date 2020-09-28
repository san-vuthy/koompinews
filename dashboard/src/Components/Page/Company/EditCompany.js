import React, { useState } from "react";
import { Col, Row, Layout, Form, Button, Input, Upload, message } from "antd";
import buttonLoading from "../../../asset/img/three-dots.svg";
import loadingPage from "../../../asset/img/Wedges-3s-200px.svg";
import LeftNavbar from "../../Layout/LeftNavbar";
import Navbar from "../../Layout/Navbar";
import TextEditor from "../../Help/TextEditor";
import { UPDATE_COMPANY } from "../../../graphql/mutation";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COMPANIES, GET_A_COMPANY } from "../../../graphql/query";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const EditCompany = (props) => {
  const { id } = useParams();
  const { refetch } = useQuery(GET_COMPANIES);
  const { loading, data } = useQuery(GET_A_COMPANY, {
    variables: { id },
  });
  //   const { name } = data.aCompany;
  const [updateCompany] = useMutation(UPDATE_COMPANY);
  const [loading1, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const handleDescChange = (value) => {
    setDesc(value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (value) => {
    updateCompany({
      variables: {
        ...value,
        id: id,
        des: desc === "" ? data.aCompany.des : desc,
        image: image === null ? data.aCompany.image : image,
        userId: "5f3e65128c70fe65b27d5c7f",
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      // if (data.aCompany.name) {
      //   await message.info(res.data.updateCompany.message);
      // } else {
      await message.success(res.data.updateCompany.message);
      await refetch();
      await props.history.push("/admin/allcompanies");
      // }
      // form.resetFields();
    });
    console.log("success", value);
  };
  const uploadImage = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload",
    // listType: 'picture',
    defaultFileList: image,
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
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: "16px 16px", backgroundColor: "#fff" }}>
            <div className="site-layout-background">
              <h1 className="title-top">Update Company</h1>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      initialValue={data.aCompany.name}
                      label="Name of Company"
                      name="name"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Row gutter={[12, 0]}>
                      <Col span={8}>
                        <Form.Item
                          initialValue={data.aCompany.website}
                          label="Website of Company"
                          name="website"
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col lg={8}>
                        <Form.Item
                          initialValue={data.aCompany.email}
                          label="Email"
                          name="email"
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col lg={8}>
                        <Form.Item
                          initialValue={data.aCompany.address}
                          label="Address"
                          name="address"
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      style={{ marginBottom: "-50px" }}
                      initialValue={data.aCompany.des}
                      label="Description"
                      name="des"
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={data.aCompany.des}
                      />
                    </Form.Item>

                    <Button
                      style={{ marginTop: "0px", width: "150px" }}
                      size="large"
                      type="primary"
                      htmlType="submit"
                    >
                      {loading1 ? (
                        <img
                          src={buttonLoading}
                          alt="btn-loading"
                          height="10"
                        />
                      ) : (
                        "UPDATE"
                      )}
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      initialValue={data.aCompany.globalCompanySize}
                      label="Global Size of Company"
                      name="globalCompanySize"
                    >
                      <Input
                        defaultValue={data.aCompany.globalCompanySize}
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      initialValue={data.aCompany.location}
                      label="Location"
                      name="location"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={data.aCompany.type}
                      label="Type of Company"
                      name="type"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item initialValue={data.aCompany.image} label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            style={{ width: "270px" }}
                            sr
                            src={`${
                              "http://localhost:8080/" + data.aCompany.image
                            }`}
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
                  </Col>
                </Row>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default EditCompany;
