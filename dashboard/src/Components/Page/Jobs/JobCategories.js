import React from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, Select } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const JobCategories = () => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    console.log('success', value);
  };
  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content
            style={{
              margin: '16px 16px',
              backgroundColor: '#fff',
              width: '60%',
              marginLeft: 'auto',
              marginRight: 'auto',
              height: '300px',
              flex: 'none',
            }}
          >
            <div
              className="site-layout-background"
              style={{ minHeight: 360, padding: 70 }}
            >
              <h1 className="title-top">Add Job JobCategories</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Name Categories"
                  name="name categories"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Categories name!',
                    },
                  ]}
                >
                  <Input />
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
              </Form>
            </div>
          </Content>
          <Content
            style={{
              margin: '16px 16px',
              backgroundColor: '#fff',
              width: '60%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div
              className="site-layout-background"
              style={{ minHeight: 360, padding: 70 }}
            >
              <h1 className="title-top">Display JobCategories</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default JobCategories;
