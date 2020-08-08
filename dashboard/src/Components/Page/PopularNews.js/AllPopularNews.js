import React from 'react';
import { Layout, Space, Table, Tag, Tooltip } from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';

const { Content } = Layout;
const AllPopularNews = () => {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      //   render: (image) => <img src={img}></img>,
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
      ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
      dataIndex: 'des',
      key: 'des',
      width: 250,
    },
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'des',
      render: (data) => {
        return data ? (
          <Tag color="#1778f2">Homepage</Tag>
        ) : (
          <Tag color="green">Newspage</Tag>
        );
      },
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
              Edit
              {/* <NavLink to="/homepage/addnews">Edit</NavLink> */}
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
      image: '/img/Den.png',
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
      author: 'hellooo',
      date: '20/20/20',
    },
  ];
  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: '16px 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 40, minHeight: 360 }}
            >
              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AllPopularNews;
