import React from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, Select } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const AddJob = () => {
  const fileList = [];
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    console.log('success', value);
  };
  const onChange = (e) => {
    console.log(e);
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
              <h1 className="title-top">Add Jobs</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      label="Position"
                      name="position"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Position!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Row gutter={16}>
                      <Col span={8}>
                        <Form.Item
                          label="Location"
                          name="location"
                          rules={[
                            {
                              required: true,
                              message: 'Please input Location!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Salary"
                          name="salary"
                          rules={[
                            {
                              required: true,
                              message: 'Please input Salary!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          rules={[
                            { required: true, message: 'Province is required' },
                          ]}
                          label="Time for work"
                          name="time"
                        >
                          <Select
                            className="event-select"
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a Category"
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
                            <Option value="Fulltime">FullTime</Option>
                            <Option value="Parttime">PartTime</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          label="Job description & requirements"
                          name="Job describtion"
                          rules={[
                            {
                              required: true,
                              message: 'job & requirement is required',
                            },
                          ]}
                        >
                          <TextEditor />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Required Skills"
                          name="skills"
                          rules={[
                            {
                              required: true,
                              message: 'Skill is required',
                            },
                          ]}
                        >
                          <TextEditor />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>

                  <Col span={8}>
                    <Form.Item
                      rules={[
                        { required: true, message: 'input Job Categories' },
                      ]}
                      label="Job Categories"
                      name="job"
                    >
                      <Select
                        className="event-select"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a Job Category"
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
                        <Option value="Computer Scient">
                          Computer Science
                        </Option>
                        <Option value="Office">Office</Option>
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
                  style={{ marginTop: '70px' }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AddJob;
