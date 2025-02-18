import React from 'react';
import { Layout, Space, Table, Tag, Divider, Popconfirm, message } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import loadingPage from '../../../asset/img/Wedges-3s-200px.svg';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useQuery, useMutation } from '@apollo/client';
import { GET_JOBS } from '../../../graphql/query';
import { DELETE_JOB } from '../../../graphql/mutation';
import moment from 'moment';
import { Link } from 'react-router-dom';
const { Content } = Layout;

const Alljobs = () => {
  const [deleteJob] = useMutation(DELETE_JOB);
  const { loading, error, data, refetch } = useQuery(GET_JOBS);

  console.log(data);
  if (error) return `Error! ${error.message}`;

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      // width: 170,
      render: (data) => {
        return (
          <img
            alt="img"
            src={'http://localhost:8080/' + data}
            height="40px"
            width="40px"
          />
        );
      },
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'title',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    // {
    //   title: 'Location',
    //   dataIndex: 'location',
    //   key: 'location',
    // },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'TimeWork',
      dataIndex: 'worktime',
      key: 'location',
    },
    {
      title: 'Category',
      dataIndex: 'jobCateName',
      key: 'location',
      render: (jobCateName) => {
        return jobCateName.name;
      },
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
      title: 'Date',
      dataIndex: 'createAt',
      key: 'date',
      render: (data) => {
        return moment.unix(data / 1000).format('YYYY-MM-DD');
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (index, data) => {
        const { id } = data;
        console.log('id', id);
        return (
          <Space>
            <Link to={`/admin/editjob/${id}`}>
              <Tag style={{ cursor: 'pointer' }} color="rgb(1, 100, 145)">
                <EditOutlined />
                Edit
              </Tag>
            </Link>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this News?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteJob({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteJob.message);
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
  const DisplayForm = () => {
    if (loading)
      return (
        <center>
          <img
            alt="img"
            style={{ height: '80px', marginTop: '200px' }}
            src={loadingPage}
          />
        </center>
      );
    refetch();
    return <Table columns={columns} dataSource={data.allJob} />;
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
              style={{ padding: 70, minHeight: 360 }}
            >
              <h1 className="title-top">All Jobs</h1>
              <DisplayForm />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Alljobs;
