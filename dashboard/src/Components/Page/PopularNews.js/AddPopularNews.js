import React, { useState } from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, Select } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;
const AddPopularNews = () => {
  //state
  const [des, setDes] = useState('');

  //function

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  const onFinish = (value) => {
    console.log('success', value);
  };
  const handleDes = (value) => {
    setDes(value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (e) => {
    console.log(e);
  };
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
          <Content style={{ margin: '16px, 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 40, minHeight: 360 }}
            >
              <div className="background-content-dashboard">
                <h1 className="title-top">Add Popular News</h1>
                <Form
                  //   initialValues={{
                  //     remember: true,
                  //   }}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Row gutter={[32, 0]}>
                    <Col span={16}>
                      <label className="all-label">Title</label>
                      <Form.Item
                        // label="Username"
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

                      <Form.Item label="Describtion" name="Describtion">
                        <TextEditor defaultValue={des} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <label className="all-label">Meta Describtion</label>
                      <Form.Item>
                        <TextArea
                          // placeholder="textarea with clear icon"
                          allowClear
                          onChange={onChange}
                        />
                      </Form.Item>
                      <Form.Item label="EVENT" name="event">
                        <Select
                          className="event-select"
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Select a person"
                          optionFilterProp="children"
                          onChange={onChange}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="homepage">Homepage</Option>
                          <Option value="newspage">Newspage</Option>
                        </Select>
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
                  <Row>
                    <Col style={{ marginTop: '30px' }} span={24}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AddPopularNews;
