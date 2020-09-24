import React from 'react';
import moment from 'moment';
import { Layout, Table, Tag, message, Popconfirm, Divider } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import loadingPage from '../../../asset/img/Wedges-3s-200px.svg';
import parse from 'html-react-parser';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ABOUT } from '../../../graphql/query';
import { DELETE_ABOUT } from '../../../graphql/mutation';

const { Content } = Layout;
const AllAbout = () => {
  const [deleteAbout] = useMutation(DELETE_ABOUT);
  const { loading, error, data, refetch } = useQuery(GET_ABOUT);

  console.log(data);
  if (error) return `Error! ${error.message}`;
  const columns = [
    {
      title: 'Image',
      dataIndex: 'avarta',
      key: 'image',
      width: 170,
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
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      render: (data) => {
        return data.length <= 25 ? data : data.substring(0, 25) + ' ...';
      },
    },
    {
      title: 'Describtion',
      dataIndex: 'des',
      key: 'des',
      render: (data) => {
        return parse(data.length <= 25 ? data : data.substring(0, 25) + ' ...');
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
      dataIndex: 'action',
      key: 'action',
      render: (index, data) => {
        const { id } = data;
        console.log('id', id);
        return (
          <div>
            <Link to={`/admin/editabout/${id}`}>
              <Tag style={{ cursor: 'pointer' }} color="rgb(1, 100, 145)">
                <EditOutlined />
                Edit
              </Tag>
            </Link>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteAbout({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteAbout.message);
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
          </div>
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
    return <Table columns={columns} dataSource={data.allAbout} />;
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
              <h1 className="title-top">All About</h1>
              <DisplayForm />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AllAbout;
