import React from 'react';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import parse from 'html-react-parser';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FileViewer from 'react-file-viewer';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Layout, Table, Tag, message, Popconfirm, Divider } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import loadingPage from '../../../asset/img/Wedges-3s-200px.svg';
import { GET_ALL_CV } from '../../../graphql/query';
import { DELETE_CV } from '../../../graphql/mutation';
const { Content } = Layout;
const AllCv = () => {
  const [deleteCV] = useMutation(DELETE_CV);

  const { loading, error, data, refetch } = useQuery(GET_ALL_CV);
  console.log(data);
  if (error) return `Error! ${error.message}`;

  const DisplayForm = () => {
    if (loading)
      return (
        <center>
          <img
            alt="loading"
            style={{ height: '80px', marginTop: '200px' }}
            src={loadingPage}
          />
        </center>
      );
    refetch();
    return <Table columns={columns} dataSource={data.allCv} />;
  };
  const columns = [
    {
      title: 'CVfile',
      dataIndex: 'file',
      key: 'image',
      width: 170,
      render: (data) => {
        return (
          //   <img
          //     src={'http://localhost:8080/' + data}
          //     height="40px"
          //     width="40px"
          //   />
          <FileViewer
            // fileType={type}
            filePath={data}
            // errorComponent={CustomErrorComponent}
            // onError={this.onError}
          />
        );
      },
    },
    {
      title: 'FirstName',
      dataIndex: 'firstname',
      key: 'title',
      width: 200,
      render: (data) => {
        return data.length <= 25 ? data : data.substring(0, 25) + ' ...';
      },
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key: 'des',
      // width: 300,
      render: (data) => {
        return parse(data.length <= 25 ? data : data.substring(0, 25) + ' ...');
      },
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'categ',
    },
    {
      title: 'Additional',
      dataIndex: 'additional',
      key: 'type',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'create_by',
    },

    {
      title: 'Date',
      dataIndex: 'createAt',
      key: 'createAt',
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
            <Link to={`/admin/acv/${id}`}>
              <Tag style={{ cursor: 'pointer' }} color="rgb(1, 100, 145)">
                <EditOutlined /> Preview
              </Tag>
            </Link>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this News?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteCV({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.deleteCv.message);
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
              <h1 className="title-top">All CV</h1>
              <DisplayForm />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AllCv;
