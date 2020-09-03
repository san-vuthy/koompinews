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
  Space,
  Tag,
  Table,
  message,
  Popconfirm,
  Divider,
} from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/client';
import {
  ADD_JOB_CATEGORY,
  DELETE_JOB_CATEGORY,
  UPDATE_JOB_CATEGORY,
} from '../../../graphql/mutation';
import {
  GET_JOB_CATEGORY,
  GET_A_JOB_CATEGORY,
  GET_A_JOB,
} from '../../../graphql/query';
import { useParams } from 'react-router-dom';

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const JobCategories = () => {
  const [id, setId] = useState('');
  const [dat, setdata1] = useState('');
  // const { id } = useParams();

  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_JOB_CATEGORY);

  const [addJobCategory] = useMutation(ADD_JOB_CATEGORY);
  const [deleteJobCategory] = useMutation(DELETE_JOB_CATEGORY);
  const [updateJobCategory] = useMutation(UPDATE_JOB_CATEGORY);
  const { loading: loading1, data: data1 } = useQuery(GET_A_JOB_CATEGORY, {
    variables: { id },
  });
  console.log('id', id);
  if (loading) return 'Loading...';
  console.log(data);
  if (error) return `Error! ${error.message}`;
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // console.log('data', data1.JobCategories.name);
  const onFinish = (value) => {
    addJobCategory({
      variables: {
        ...value,
        userId: '5f3e65128c70fe65b27d5c7f',
      },
    }).then(async (res) => {
      await message.success(res.data.addJobCategory.message);
      await refetch();
      form.resetFields();
    });
    console.log('success', value);
  };
  const onFinish1 = (value) => {
    updateJobCategory({
      variables: {
        id: id,
        ...value,
        userId: '5f3e65128c70fe65b27d5c7f',
      },
    }).then(async (res) => {
      await message.success(res.data.updateJobCategory.message);
      await refetch();
      window.location.reload();
      // form.resetFields();
    });
    console.log('success', value);
  };

  function DisplayUpdate() {}

  const columns = [
    {
      title: 'Name of Categories',
      dataIndex: 'name',
      key: 'jobcategories',
    },

    {
      title: 'CreateBy',
      dataIndex: 'user',
      key: 'create_by',
      render: (user) => {
        return user.name;
      },
    },
    {
      title: 'Create At',
      dataIndex: 'createAt',
      key: 'create_at',
      render: (data) => {
        return moment.unix(data / 1000).format('YYYY-MM-DD');
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (index, data) => {
        const { id } = data;
        console.log('id', id);
        return (
          <Space>
            {/* <Link to={`/admin/editjob/${id}`}> */}
            <Tag
              onClick={() => {
                setEdit(true);
                setId(`${id}`);
                setdata1(`{data1}`);
              }}
              style={{ cursor: 'pointer' }}
              color="rgb(1, 100, 145)"
            >
              <EditOutlined /> Edit
            </Tag>
            {/* </Link> */}
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this News?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteJobCategory({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteJobCategory.message);
                    await refetch();
                  })
                  .catch((error) => {
                    console.log(error);
                    return null;
                  });
              }}
            >
              <Tag color="rgb(255, 0, 0)" style={{ cursor: 'pointer' }}>
                <DeleteOutlined /> Delete
              </Tag>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  if (loading1) {
    return 'loading....';
  }

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
              {!edit && (
                <div>
                  <h1 className="title-top">Add JobCategories</h1>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label="Name Categories"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Categories name!',
                        },
                      ]}
                    >
                      <Input size="large" />
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
              )}
              {edit && (
                <div>
                  <h1 className="title-top">Update JobCategories</h1>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish1}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      initialValue={data1.aJobCategory.name}
                      label="Name Categories"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Categories name!',
                        },
                      ]}
                    >
                      <Input
                        // defaultValue={data1.aJobCategory.name}
                        size="large"
                      />
                    </Form.Item>
                    <div style={{ display: 'flex' }}>
                      <Button
                        size="large"
                        className="button-submit"
                        type="primary"
                        htmlType="submit"
                        // onClick={() => setEdit(false)}
                        //   style={{ marginTop: '70px' }}
                      >
                        Submit
                      </Button>
                      <div style={{ paddingLeft: '10px' }}>
                        <Button
                          size="large"
                          type="primary"
                          danger
                          onClick={() =>
                            setEdit(false, window.location.reload())
                          }
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
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
              <Table columns={columns} dataSource={data.allJobCategories} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default JobCategories;
