// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const GET_NEWS = gql`
//   query {
//     allNews {
//       title
//     }
//   }
// `;

// const Test = () => {
//   const { loading, error, data } = useQuery(GET_NEWS);

//   if (loading) return 'Loading...';
//   console.log(data);
//   if (error) return `Error! ${error.message}`;
//   return (
//     <div>
//       <h1>hello</h1>
//       {data.allNews.map((res) => {
//         return <h1>{res.title}</h1>;
//       })}
//     </div>
//   );
// };

// export default Test;

import React from 'react';
import {
  Layout,
  Table,
  Tag,
  Space,
  InputNumber,
  message,
  Popconfirm,
} from 'antd';
// import LeftNavbar from '../navbar/leftNavbar';
// import Navbar from '../navbar/navbar';
import { useQuery, useMutation } from '@apollo/client';
import { GET_JOBS } from '../graphql/query';
import { DELETE_JOB } from '../graphql/mutation';
import moment from 'moment';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
// import NProgress from 'nprogress';
const { Content, Footer } = Layout;

function AllBooks() {
  const [deleteJob] = useMutation(DELETE_JOB);
  // const confirm = (id) => {
  //   deleteBook({ variables: { id: id } })
  //     .then(async (res) => {
  //       await refetch();
  //       message.success(res.data.deleteBook.message);
  //     })
  //     .catch((error) => console.error(error));
  // };

  const cancel = (e) => {
    console.log(e);
    message.error('The author does not deleted');
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (data) => {
        return (
          <img
            src={`http://localhost:9000${data[0]}`}
            alt="data"
            className="thumnail"
          />
        );
      },
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'title',
    },

    // {
    //   title: "Quantity",
    //   dataIndex: "quantity",
    //   key: "quantity",
    //   render: (data) => {
    //     return <InputNumber defaultValue={data} />;
    //   },
    // },
    // {
    //   title: "Price",
    //   dataIndex: "price",
    //   key: "price",
    //   render: (data) => {
    //     return <> ${data} </>;
    //   },
    // },
    // {
    //   title: "Category",
    //   dataIndex: "category",
    //   key: "category",
    //   render: (data) => {
    //     return data.title;
    //   },
    // },
    // {
    //   title: "Best Seller",
    //   dataIndex: "bestSeller",
    //   key: "bestSeller",
    //   render: (data) => {
    //     return data ? (
    //       <Tag color="#1778f2">True</Tag>
    //     ) : (
    //       <Tag color="#f50">False</Tag>
    //     );
    //   },
    // },
    // {
    //   title: "Author",
    //   dataIndex: "author",
    //   key: "author",
    //   render: (data) => {
    //     return data.map((res) => <Tag>{res.fullname}</Tag>);
    //   },
    // },
    // {
    //   title: "Supplier",
    //   dataIndex: "supplier",
    //   key: "supplier",
    //   render: (data) => {
    //     return data.name;
    //   },
    // },
    // {
    //   title: "Tags",
    //   dataIndex: "tags",
    //   key: "tags",
    //   render: (tags) => (
    //     <>
    //       {tags.slice(0, 2).map((tag) => {
    //         return (
    //           <Tag color="#535c68" key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: 'Action',
      key: 'action',
      render: (data) => {
        return (
          <Space>
            <div>
              <Tag color="#1778f2">Edit</Tag>
            </div>
            <Popconfirm
              title="Are you sure to delete this book?"
              // onConfirm={() => confirm(data.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Tag color="#f50">Delete</Tag>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const { loading, error, data, refetch } = useQuery(GET_JOBS);
  if (loading) {
    // NProgress.start();
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* <LeftNavbar /> */}
        <Layout className="site-layout">
          {/* <Navbar /> */}
          <Content style={{ margin: '16px 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Table columns={columns} dataSource={null} loading={true} />
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
  if (error) return `Error! ${error.message}`;
  // NProgress.done();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <LeftNavbar /> */}
      <Layout className="site-layout">
        {/* <Navbar /> */}
        <Content style={{ margin: '16px 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h2>All Books</h2>
            <Table columns={columns} dataSource={data.allJob} />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AllBooks;
