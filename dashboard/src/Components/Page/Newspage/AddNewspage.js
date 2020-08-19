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
} from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;
const AddNewspage = () => {
  const [popular, setPopular] = useState(true);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    console.log('success', ...value, popular);
  };
  const onChange = (e) => {
    console.log(e);
  };

  function onChangePopular(value) {
    setPopular(value.target.checked);
    console.log(`checked = ${value.target.checked}`);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const fileList = [];
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
  };

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
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Title!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Form.Item
                        label="Describtion"
                        name="Describtion"
                        rules={[
                          {
                            required: true,
                            message: 'Describtion is required',
                          },
                        ]}
                      >
                        <TextEditor />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      rules={[
                        { required: true, message: 'Category is required' },
                      ]}
                      label="Categories"
                      name="Category"
                    >
                      <Select
                        className="event-select"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a Types"
                        optionFilterProp="children"
                        onChange={onChange}
                        //   onFocus={onFocus}
                        //   onBlur={onBlur}
                        //   onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="sport">Sport</Option>
                        <Option value="social">Social</Option>
                        <Option value="technology">Technology</Option>
                        <Option value="lifestyle"> life style</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      // rules={[
                      //   { required: true, message: 'Type is required' },
                      // ]}
                      label="Type"
                      name="type"
                    >
                      <Select
                        className="event-select"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a Types"
                        optionFilterProp="children"
                        onChange={onChange}
                        //   onFocus={onFocus}
                        //   onBlur={onBlur}
                        //   onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Mostpopular">Most Popular</Option>
                        <Option value="RecentPopular">Recent Popular</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      rules={[{ required: true, message: 'Tag is required' }]}
                      label="Tag"
                      name="tag"
                    >
                      <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        onChange={handleChange}
                      ></Select>
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: 'SEO Keyword is required',
                        },
                      ]}
                      label="SEO Keyword"
                      name="keyword"
                    >
                      <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        onChange={handleChange}
                      ></Select>
                    </Form.Item>
                    <Form.Item
                      label="Meta Describtion"
                      name="Meta Describtion"
                      rules={[
                        {
                          required: true,
                          message: 'Meta Describtion is required',
                        },
                      ]}
                    >
                      <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Upload Image" name="image">
                      <Upload {...props}>
                        <Button>
                          <UploadOutlined /> Upload
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
                <Button
                  size="large"
                  className="button-submit"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
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
