import React from 'react';
import { Layout, Space, Table, Tag } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import { NavLink } from 'react-router-dom';
const { Content } = Layout;

const Alljobs = () => {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: 170,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 300,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Des',
      dataIndex: 'des',
      key: 'des',
    },

    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <div>
            <Tag color="#1778f2">
              <NavLink to="/homepage/addnews">Edit</NavLink>
            </Tag>
          </div>
          {/* <Popconfirm
                  title="Are you sure to delete this book?"
                  onConfirm={() => confirm(data.id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                > */}
          <Tag color="#f50">Delete</Tag>
          {/* </Popconfirm> */}
        </Space>
      ),
    },
  ];

  const data = [
    {
      _id: 1,
      des: 'hello world hello everybody hello i love u',
      image: '/img/news.webp',
      title: 'Hello',
      author: 'Den',
      date: '20/20/20',
    },
    {
      _id: 2,
      des: 'hello world hello everybody hello i love u',
      image: '/img/news.webp',
      title: 'Hello',
      author: 'Den',
      date: '20/20/20',
    },
    {
      _id: 3,
      des: 'hello world hello everybody hello i love u',
      image: '/img/news.webp',
      title: 'Hello',
      author: 'Den',
      date: '20/20/20',
    },
    {
      _id: 4,
      des: 'hello world hello everybody hello i love u',
      image: '/img/news.webp',
      title: 'Hello',
      author: 'Den',
      date: '20/20/20',
    },
  ];
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
              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Alljobs;
