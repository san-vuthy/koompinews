import React, { useState } from "react";
import { Col, Row, Layout, Form, Button, Input, Upload, message } from "antd";
import LeftNavbar from "../../Layout/LeftNavbar";
import loadingPage from "../../../asset/img/Wedges-3s-200px.svg";
import Navbar from "../../Layout/Navbar";
import TextEditor from "../../Help/TextEditor";
import { useParams } from "react-router-dom";
import { UPDATE_KNOWLEDGE } from "../../../graphql/mutation";
import { GET_KNOWLEDGE, GET_A_KNOWLEDGE } from "../../../graphql/query";
import { useQuery, useMutation } from "@apollo/client";
import buttonLoading from "../../../asset/img/three-dots.svg";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Content } = Layout;
const EditKnowledge = (props) => {
  const { id } = useParams();
  const [updateKnowledge] = useMutation(UPDATE_KNOWLEDGE);
  const { refetch } = useQuery(GET_KNOWLEDGE);
  const { loading, data } = useQuery(GET_A_KNOWLEDGE, {
    variables: { id },
  });
  const [loading1, setLoading] = useState(false);
  const [imagesf, setImagesf] = useState("");
  const [imagefaq, setImagefaq] = useState("");
  const [imageklb, setImageklb] = useState("");
  const [desc, setDesc] = useState("");
  const [desc1, setDesc1] = useState("");

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (value) => {
    updateKnowledge({
      variables: {
        id: id,
        ...value,
        lastbase: desc === "" ? null : desc,
        recentbase: desc1 === "" ? null : desc1,
        klbavatar: imageklb === "" ? data.aKnowledge.klbavatar : imageklb,
        faqavatar: imagefaq === "" ? data.aKnowledge.faqavatar : imagefaq,
        sfavatar: imagesf === "" ? data.aKnowledge.sfavatar : imagesf,
        // avarta: image === null ? data.aKnowledge.avarta : image,
        userId: "5f324067aeef78b4df13ca54",
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.updateKnowledge.message);
      await refetch();
      await props.history.push("/admin/allknowledge");
    });
    console.log("success", value, desc);
  };
  const onChange = (e) => {
    console.log(e);
  };
  const handleDescChange = (value) => {
    console.log(value);
    setDesc(value);
  };
  const handleDesc1Change = (value) => {
    console.log(value);
    setDesc1(value);
  };
  const uploadFaqs = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload",
    // listType: 'picture',
    // defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setImagefaq(info.file.name.replace(/\s+/g, "-").toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const uploadKnowledgeBase = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload",
    // listType: 'picture',
    // defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setImageklb(info.file.name.replace(/\s+/g, "-").toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const uploadSupportForum = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload",
    // listType: 'picture',
    // defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setImagesf(info.file.name.replace(/\s+/g, "-").toLowerCase());
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
          alt="laoding"
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
              <h1 className="title-top">Update Knowledge</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      label="Main Title"
                      initialValue={data.aKnowledge.maintitle}
                      name="maintitle"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Row gutter={[12, 0]}>
                      <Col span={12}>
                        <Form.Item
                          label="Lastbase"
                          name="lastbase"
                          style={{ marginBottom: "-90px" }}
                          initialValue={data.aKnowledge.lastbase}
                        >
                          <TextEditor
                            handleDescChange={handleDescChange}
                            defaultValue={data.aKnowledge.lastbase}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Recentbase"
                          name="recentbase"
                          style={{ marginBottom: "-90px" }}
                          initialValue={data.aKnowledge.recentbase}
                        >
                          <TextEditor
                            handleDescChange={handleDesc1Change}
                            defaultValue={data.aKnowledge.recentbase}
                          />
                        </Form.Item>
                      </Col>
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
                          "Update"
                        )}
                      </Button>
                    </Row>
                  </Col>
                  <Col span={8}>
                    {/* <Form.Item
                      label="Title"
                      initialValue={data.aKnowledge.title}
                      name="title"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Description"
                      name="des"
                      initialValue={data.aKnowledge.des}
                    >
                      <TextArea
                        // placeholder="textarea with clear icon"
                        allowClear
                        onChange={onChange}
                      />
                    </Form.Item> */}
                    <Form.Item
                      initialValue={data.aKnowledge.faq}
                      label="FAQs"
                      name="faq"
                      rules={[
                        {
                          required: true,
                          message: "Please input Describtion!",
                        },
                      ]}
                    >
                      <TextArea
                        // placeholder="textarea with clear icon"
                        allowClear
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Knowledge Base"
                      initialValue={data.aKnowledge.klb}
                      name="klb"
                      rules={[
                        {
                          required: true,
                          message: "Please input Knowledge Base!",
                        },
                      ]}
                    >
                      <TextArea
                        // placeholder="textarea with clear icon"
                        allowClear
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Support Forum"
                      initialValue={data.aKnowledge.sf}
                      name="sf"
                      rules={[
                        {
                          required: true,
                          message: "Please input Support Forum!",
                        },
                      ]}
                    >
                      <TextArea
                        // placeholder="textarea with clear icon"
                        allowClear
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Row>
                      <Col span={8}>
                        <Form.Item
                          initialValue={data.aKnowledge.faqavatar}
                          label="FAQs Avarta"
                          name="faqavatar"
                          rules={[
                            {
                              required: true,
                              message: "Please input FAQs Avarta!",
                            },
                          ]}
                        >
                          <Upload {...uploadFaqs}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                          </Upload>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          initialValue={data.aKnowledge.klbavatar}
                          label="Knowledge"
                          name="klbavatar"
                          rules={[
                            {
                              required: true,
                              message: "Please input Knowledge Avarta!",
                            },
                          ]}
                        >
                          <Upload {...uploadKnowledgeBase}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                          </Upload>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          initialValue={data.aKnowledge.sfavatar}
                          label="Support Forum"
                          name="sfavatar"
                          rules={[
                            {
                              required: true,
                              message: "Please input Support Forum Avarta!",
                            },
                          ]}
                        >
                          <Upload {...uploadSupportForum}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                          </Upload>
                        </Form.Item>
                      </Col>
                    </Row>
                    {/* <Form.Item
                      label="Avarta"
                      name="avarta"
                      initialValue={data.aKnowledge.avarta}
                    >
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            style={{ width: '270px' }}
                            src={`${
                              'http://localhost:8080/' + data.aKnowledge.avarta
                            }`}
                            alt="avatar"
                          />
                        ) : (
                          <img
                            style={{ width: '270px' }}
                            src={`${'http://localhost:8080/' + image}`}
                            // src="http://localhost:8080/Technology-Images-Wallpapers-027.jpg"
                            alt="avatar"
                          />
                        )}
                      </Upload.Dragger>
                    </Form.Item> */}
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

export default EditKnowledge;
