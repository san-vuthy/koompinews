import React, { useState } from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, message } from 'antd';

import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import loadingPage from '../../../asset/img/Wedges-3s-200px.svg';
import buttonLoading from '../../../asset/img/three-dots.svg';
import TextEditor from '../../Help/TextEditor';
import { UPDATE_HOME } from '../../../graphql/mutation';
import { GET_A_HOME } from '../../../graphql/query';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const { Content } = Layout;
const EditHome = (props) => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [image, setImage] = useState('');
  const [loading1, setLoading] = useState(false);
  const [desc, setDesc] = useState('');
  const [updateHome] = useMutation(UPDATE_HOME);
  const {
    loading: HomeLoading,
    data: HomeData,
    refetch: Homerefetch,
  } = useQuery(GET_A_HOME, {
    variables: { id },
  });
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    updateHome({
      variables: {
        id: id,
        ...value,
        des: desc === '' ? HomeData.aHome.des : desc,
        image: image === '' ? HomeData.aHome.image : image,
        userId: '5f324067aeef78b4df13ca54',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.updateHome.message);
      await Homerefetch();
      await props.history.push('/admin/allhome');
    });
    setDesc(form.resetFields());
    form.resetFields();
    console.log('success', value, desc);
  };
  const onChange = (e) => {
    console.log(e);
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
    // defaultFileList: image,
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
  if (HomeLoading) {
    return (
      <center>
        <img style={{ height: '80px', marginTop: '200px' }} src={loadingPage} />
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
              <h1 className="title-top">Add Home</h1>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={12}>
                    <Form.Item
                      initialValue={HomeData.aHome.title}
                      label="Title"
                      // style={{ fontSize: '30px' }}
                      name="title"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Description"
                      name="describtion"
                      style={{ marginBottom: '-90px' }}
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={HomeData.aHome.des}
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
                  <Col span={12}>
                    <Form.Item
                      label="SubTitle"
                      initialValue={HomeData.aHome.subtitle}
                      name="subtitle"
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item label="Image" name="image">
                      <Upload.Dragger {...uploadImage}>
                        {image === '' ? (
                          <img
                            style={{ width: '270px' }}
                            src={`${
                              'http://localhost:8080/' + HomeData.aHome.image
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

export default EditHome;
