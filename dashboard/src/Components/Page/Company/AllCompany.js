import React from 'react';
import { Layout, Space, Table, Tag, Divider, Popconfirm, message } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import { useQuery, useMutation } from '@apollo/client';
import { GET_COMPANIES } from '../../../graphql/query';
import { DELETE_COMPANY } from '../../../graphql/mutation';
import { NavLink, Link } from 'react-router-dom';
import moment from 'moment';

const { Content } = Layout;

const AllCompany = () => {
  const [deleteCompany] = useMutation(DELETE_COMPANY);
  const { loading, error, data, refetch } = useQuery(GET_COMPANIES);

  if (loading) return 'Loading...';
  console.log(data);
  if (error) return `Error! ${error.message}`;

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'title',
      render: (data) => {
        return (
          <img
            src={'http://localhost:8080/' + data}
            height="40px"
            width="40px"
          />
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'title',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'title',
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'title',
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
            <Link to={`/admin/editcompany/${id}`}>
              <Tag style={{ cursor: 'pointer' }} color="rgb(1, 100, 145)">
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
                deleteCompany({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteCompany.message);
                    await refetch();
                  })
                  .catch((error) => {
                    console.log(error);
                    return null;
                  });
              }}
            >
              <Tag color="rgb(255, 0, 0)" style={{ cursor: 'pointer' }}>
                Delete
              </Tag>
            </Popconfirm>
          </Space>
          // <div>action</div>
        );
      },
    },
  ];
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: '16px 16px', backgroundColor: '#fff' }}>
            <div
              className="site-layout-background"
              style={{ padding: 70, minHeight: 360 }}
            >
              <h1 className="title-top">All Companies</h1>
              <Table columns={columns} dataSource={data.allCompany} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AllCompany;
