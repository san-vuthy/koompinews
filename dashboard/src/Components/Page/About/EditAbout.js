import React, { useState } from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, message } from 'antd';
import buttonLoading from '../../../asset/img/three-dots.svg';
import loadingPage from '../../../asset/img/Wedges-3s-200px.svg';
import { useParams } from 'react-router-dom';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_ABOUT } from '../../../graphql/mutation';
import { GET_A_ABOUT, GET_ABOUT } from '../../../graphql/query';

const { Content } = Layout;
const EditAbout = (props) => {
  const { id } = useParams();
  const [updateAbout] = useMutation(UPDATE_ABOUT);
  const { refetch } = useQuery(GET_ABOUT);
  const { loading, data } = useQuery(GET_A_ABOUT, {
    variables: { id },
  });
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [loading1, setLoading] = useState(false);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    updateAbout({
      variables: {
        id: id,
        ...value,
        des: desc === '' ? data.aAbout.des : desc,
        avarta: image === null ? data.aAbout.avarta : image,
        userId: '5f324067aeef78b4df13ca54',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.updateAbout.message);
      await refetch();
      await props.history.push('/admin/allabout');
    });
    console.log('success', value, desc);
  };
  const handleDescChange = (value) => {
    console.log(value);
    setDesc(value);
  };
  const uploadImage = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:8080/upload',
    // listType: 'picture',
    defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setImage(info.file.name.replace(/\s+/g, '-').toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  if (loading) {
    return (
      <center>
        <img
          alt="img"
          style={{ height: '80px', marginTop: '200px' }}
          src={loadingPage}
        />
      </center>
    );
  }
  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: '16px 16px', backgroundColor: '#fff' }}>
            <div
              className="site-layout-background"
              style={{ minHeight: 360, padding: 70 }}
            >
              <h1 className="title-top">Update About</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      initialValue={data.aAbout.title}
                      label="Title"
                      // style={{ fontSize: '30px' }}
                      name="title"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={data.aAbout.des}
                      label="Describtion"
                      name="describtion"
                      style={{ marginBottom: '-90px' }}
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={data.aAbout.des}
                      />
                    </Form.Item>
                    <Button
                      style={{ marginTop: '0px', width: '150px' }}
                      size="large"
                      // className="button button-submit"
                      type="primary"
                      htmlType="submit"
                    >
                      {loading1 ? (
                        <img
                          src={buttonLoading}
                          alt="btn-loading"
                          height="10"
                        />
                      ) : (
                        'SUBMIT'
                      )}
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Image" initialValue={data.aAbout.avarta}>
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            style={{ width: '270px' }}
                            src={`${
                              'http://localhost:8080/' + data.aAbout.avarta
                            }`}
                            alt="avatar"
                          />
                        ) : (
                          <img
                            style={{ width: '270px' }}
                            src={`${'http://localhost:8080/' + image}`}
                            // src="http://localhost:8080/Technology-Images-Wallpapers-027.jpg"
                            alt="avatar"
                          />
                        )}
                      </Upload.Dragger>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default EditAbout;
