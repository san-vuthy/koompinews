import React, { useState } from 'react';
import { Col, Row, Layout, Form, Button, Input, Upload, message } from 'antd';
import buttonLoading from '../../../asset/img/three-dots.svg';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { ADD_KNOWLEDGE } from '../../../graphql/mutation';
import { useMutation } from '@apollo/client';

const { TextArea } = Input;
const { Content } = Layout;
const AddKnowledge = () => {
  const [form] = Form.useForm();
  const [addKnowledge, { data }] = useMutation(ADD_KNOWLEDGE);

  const [loading1, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [desc1, setDesc1] = useState('');

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    addKnowledge({
      variables: {
        ...value,
        lastbase: desc === '' ? null : desc,
        recentbase: desc1 === '' ? null : desc1,
        avarta: image,
        userId: '5f324067aeef78b4df13ca54',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.addKnowledge.message);
      setDesc(form.resetFields());
      setDesc1(form.resetFields());
      form.resetFields();
    });
    console.log('success', value, desc);
  };
  const onChange = (e) => {
    console.log(e);
  };
  const handleDescChange = (value) => {
    console.log(value);
    setDesc(value);
  };
  const handleDesc1Change = (value) => {
    console.log(value);
    setDesc1(value);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
              <h1 className="title-top">Add Knowledge</h1>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      label="Main Title"
                      // style={{ fontSize: '30px' }}
                      name="maintitle"
                      //   rules={[
                      //     {
                      //       required: true,
                      //       message: 'Please input  Title!',
                      //     },
                      //   ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Row gutter={[12, 0]}>
                      <Col span={12}>
                        <Form.Item
                          label="Lastbase"
                          name="lastbase"
                          style={{ marginBottom: '-50px' }}
                        >
                          <TextEditor
                            handleDescChange={handleDescChange}
                            defaultValue={desc}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Recentbase"
                          name="recentbase"
                          style={{ marginBottom: '-50px' }}
                        >
                          <TextEditor
                            handleDescChange={handleDesc1Change}
                            defaultValue={desc1}
                          />
                        </Form.Item>
                      </Col>
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
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Title"
                      // style={{ fontSize: '30px' }}
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Title!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Description"
                      name="des"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Describtion!',
                        },
                      ]}
                    >
                      <TextArea
                        // placeholder="textarea with clear icon"
                        allowClear
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Avatar"
                      name="avarta"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Avarta!',
                        },
                      ]}
                    >
                      <Upload.Dragger {...uploadImage}>
                        {image === '' ? (
                          <img
                            style={{ width: '270px' }}
                            src="http://localhost:8080/undraw_upload_87y9.svg"
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

export default AddKnowledge;
