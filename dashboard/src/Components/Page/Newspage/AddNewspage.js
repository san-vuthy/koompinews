import React, { useState } from 'react';
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  Select,
  Checkbox,
  message,
} from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { GET_CATEGORIES, GET_TYPE_OF_NEWS } from '../../../graphql/query';
import { ADD_NEWS } from '../../../graphql/mutation';
import { useQuery, useMutation } from '@apollo/client';

const { Content } = Layout;
const { Option } = Select;
const AddNewspage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [addNews, { data }] = useMutation(ADD_NEWS);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    addNews({
      variables: {
        ...value,
        describtion: desc,
        image: image,
        userId: '5f324067aeef78b4df13ca54',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.addNews.message);
    });
    console.log('success', value, desc);
  };
  const onChange = (e) => {
    console.log(e);
  };
  const handleDescChange = (value) => {
    console.log(value);
    setDesc(value);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const uploadImage = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:8080/upload',
    // listType: 'picture',
    defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setImage(info.file.name.replace(/\s+/g, '-').toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  function DisplayNewType() {
    const { loading, error, data } = useQuery(GET_TYPE_OF_NEWS);

    if (loading) return 'Loading...';
    console.log(data);
    if (error) return `Error! ${error.message}`;

    return (
      <Form.Item
        rules={[{ required: true, message: 'Type is required' }]}
        label="Type"
        name="newsTypeId"
      >
        <Select
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

    if (loading) return 'Loading...';
    console.log(data);
    if (error) return `Error! ${error.message}`;
    return (
      <Form.Item
        rules={[{ required: true, message: 'Category is required' }]}
        label="Categories"
        name="categoriesId"
      >
        <Select
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

  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: '16px 16px', backgroundColor: '#fff' }}>
            <div
              className="site-layout-background"
              style={{ minHeight: 360, padding: 70 }}
            >
              {/* <div className="background-content-dashboard"> */}
              <h1 className="title-top">Add News</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      label="Title"
                      // style={{ fontSize: '30px' }}
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Title!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>

                    <Form.Item
                      label="Describtion"
                      name="describtion"
                      style={{ marginBottom: '-90px' }}
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={desc}
                      />
                    </Form.Item>
                    <Button
                      style={{ marginTop: '0px', width: '150px' }}
                      size="large"
                      // className="button button-submit"
                      type="primary"
                      htmlType="submit"
                    >
                      SUBMIT
                    </Button>
                  </Col>
                  <Col span={8}>
                    {/* DisplayCateogries */}
                    <DisplayCategories />
                    {/* Display NewsType */}
                    <DisplayNewType />
                    {/* <Form.Item
                      rules={[{ required: true, message: 'Tag is required' }]}
                      label="Tag"
                      name="tag"
                    >
                      <Input
                        bordered={true}
                        className="tags-addnews"
                        size="large"
                      />
                    </Form.Item> */}

                    <Form.Item label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image === '' ? (
                          <img
                            style={{ width: '270px' }}
                            src="http://localhost:8080/undraw_upload_87y9.svg"
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

export default AddNewspage;
