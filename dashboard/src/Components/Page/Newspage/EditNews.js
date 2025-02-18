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
  message,
} from "antd";
import loadingPage from "../../../asset/img/Wedges-3s-200px.svg";
import buttonLoading from "../../../asset/img/three-dots.svg";
import LeftNavbar from "../../Layout/LeftNavbar";
import Navbar from "../../Layout/Navbar";
import TextEditor from "../../Help/TextEditor";

import {
  GET_CATEGORIES,
  GET_TYPE_OF_NEWS,
  GET_ANEWS,
  GET_NEWS,
} from "../../../graphql/query";
import { UPDATE_NEWS } from "../../../graphql/mutation";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;
const EditNews = (props) => {
  const { id } = useParams();
  const { refetch } = useQuery(GET_NEWS);
  const {
    loading: NewsLoading,
    data: NewsData,
    refetch: Newrefetch,
  } = useQuery(GET_ANEWS, {
    variables: { id },
  });
  const [updateNews] = useMutation(UPDATE_NEWS);
  // console.log('data', NewsData.aNews.title);

  const [loading1, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");
  const onChange = (e) => {
    console.log(e);
  };
  const handleDescChange = (value) => {
    console.log(value);
    setDesc(value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (value) => {
    updateNews({
      variables: {
        ...value,
        id: id,
        // describtion: desc,
        describtion: desc === "" ? NewsData.aNews.describtion : desc,
        image: image === null ? NewsData.aNews.image : image,
        userId: "5f324067aeef78b4df13ca54",
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.updateNews.message);
      await Newrefetch();
      await refetch();
      await props.history.push("/admin/allNews");
    });
    console.log("success", value, desc);
  };

  const uploadImage = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload",
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

  function DisplayNewType() {
    const { loading, error, data } = useQuery(GET_TYPE_OF_NEWS);

    if (loading) return "Loading...";
    console.log(data);
    if (error) return `Error! ${error.message}`;
    console.log("image", NewsData.aNews.image);
    return (
      <Form.Item
        // rules={[{ required: true, message: 'Type is required' }]}
        label="Type"
        name="newsTypeId"
        initialValue={NewsData.aNews.type.id}
      >
        <Select
          defaultValue={NewsData.aNews.type.name}
          className="event-select"
          size="large"
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Category"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data.allTypeOfNews.map((res) => {
            return <Option value={res.id}>{res.name}</Option>;
          })}
        </Select>
      </Form.Item>
    );
  }

  function DisplayCategories() {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return "Loading...";
    console.log(data);
    if (error) return `Error! ${error.message}`;

    return (
      <Form.Item
        label="Categories"
        name="categoriesId"
        initialValue={NewsData.aNews.categoreyname.id}
      >
        <Select
          defaultValue={NewsData.aNews.categoreyname.name}
          size="large"
          className="event-select"
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Type"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data.allCategories.map((res) => {
            return <Option value={res.id}>{res.name}</Option>;
          })}
        </Select>
      </Form.Item>
    );
  }

  if (NewsLoading) {
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
              {/* <div className="background-content-dashboard"> */}
              <h1 className="title-top">Update News</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      initialValue={NewsData.aNews.title}
                      label="Title"
                      // style={{ fontSize: '30px' }}
                      name="title"
                    >
                      <Input size="large" />
                    </Form.Item>

                    <Form.Item
                      label="Describtion"
                      name="describtion"
                      style={{ marginBottom: "-90px" }}
                      initialValue={NewsData.aNews.describtion}
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={NewsData.aNews.describtion}
                      />
                    </Form.Item>
                    <Button
                      style={{ marginTop: "0px", width: "150px" }}
                      size="large"
                      // className="button button-submit"
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
                    {/* DisplayCateogries */}
                    <DisplayCategories />
                    {/* Display NewsType */}
                    <DisplayNewType />

                    <Form.Item
                      label="Image"
                      initialValue={NewsData.aNews.image}
                    >
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            style={{ width: "270px" }}
                            src={`${
                              "http://localhost:8080/" + NewsData.aNews.image
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
            {/* </div> */}
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default EditNews;
