import React from 'react';
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  Select,
  Space,
  Tag,
  Table,
} from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import moment from 'moment';

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

  const columns = [
    {
      title: 'Job Categories',
      dataIndex: 'jobcategories',
      key: 'jobcategories',
    },
    {
      title: 'Create At',
      dataIndex: 'create_at',
      key: 'create_at',
      render: (data) => {
        return moment(parseInt(data)).format('dddd, Do MMMM  YYYY');
      },
    },
    {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
      render: (data) => {
        return (
          <Space>
            <div>
              <Tag icon={<EditOutlined />} color="#1778f2">
                Edit
              </Tag>
              <Tag icon={<DeleteOutlined />} color="#f50">
                Delete
              </Tag>
            </div>
          </Space>
        );
      },
    },
  ];
  const data = [
    {
      _id: 1,
      jobcategories: 'job categories',
      date: '20/29/20',
    },
  ];
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
              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default JobCategories;
