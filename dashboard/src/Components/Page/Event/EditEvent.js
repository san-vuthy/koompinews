import React, { useState } from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, message } from 'antd';
import loadingPage from '../../../asset/img/Wedges-3s-200px.svg';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_EVENT } from '../../../graphql/mutation';
import { GET_A_EVENT, GET_EVENT } from '../../../graphql/query';
import { useParams } from 'react-router-dom';
import buttonLoading from '../../../asset/img/three-dots.svg';

const { Content } = Layout;
const EditEvent = (props) => {
  const { id } = useParams();
  const [updateEvent] = useMutation(UPDATE_EVENT);
  const { refetch } = useQuery(GET_EVENT);
  const { loading, data } = useQuery(GET_A_EVENT, {
    variables: { id },
  });
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [loading1, setLoading] = useState(false);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    updateEvent({
      variables: {
        id: id,
        ...value,
        des: desc === '' ? data.aEvent.des : desc,
        image: image === null ? data.aEvent.image : image,
        userId: '5f324067aeef78b4df13ca54',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.updateEvent.message);
      await refetch();
      await props.history.push('/admin/allevent');
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
              <h1 className="title-top">Update Event</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      initialValue={data.aEvent.title}
                      label="Title"
                      // style={{ fontSize: '30px' }}
                      name="title"
                      //   rules={[
                      //     {
                      //       required: true,
                      //       message: 'Please input Title!',
                      //     },
                      //   ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      initialValue={data.aEvent.des}
                      label="Describtion"
                      name="describtion"
                      style={{ marginBottom: '-90px' }}
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={data.aEvent.des}
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
                        <img src={buttonLoading} alt="btnloading" height="10" />
                      ) : (
                        'UPDATE'
                      )}
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Image" initialValue={data.aEvent.image}>
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            style={{ width: '270px' }}
                            src={`${
                              'http://localhost:8080/' + data.aEvent.image
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

export default EditEvent;
