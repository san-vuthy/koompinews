import React from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';

const { Content } = Layout;
const { TextArea } = Input;
const AddNews = () => {
  const onFinish = (values) => {
    console.log('Sucees', values);
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
                <h1>Add News</h1>
                <Form
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Row gutter={[32, 0]}>
                    <Col span={16}>
                      <label className="all-label">Title</label>
                      <Form.Item
                        // label="Username"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Title!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <label className="all-label">Describtion</label>
                      <Form.Item>
                        <TextEditor />
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
                      <Form.Item abel="Upload Image" name="image">
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

export default AddNews;
