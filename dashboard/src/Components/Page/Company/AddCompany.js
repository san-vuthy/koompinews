import React, { useState } from 'react';
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  Select,
  message,
} from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { ADD_COMPANY } from '../../../graphql/mutation';
import { useMutation } from '@apollo/client';

const { Content } = Layout;
const { Option } = Select;
const AddCompany = () => {
  const [addCompany] = useMutation(ADD_COMPANY);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  const handleDescChange = (value) => {
    setDesc(value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    addCompany({
      variables: {
        ...value,
        des: desc,
        image: image,
        userId: '5f3e65128c70fe65b27d5c7f',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.addCompany.message);
      // form.resetFields();
    });
    console.log('success', value);
  };
  const onChange = (e) => {
    console.log(e);
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
              <h1 className="title-top">Add Company</h1>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      label="Name of Company"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Company Name!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Row gutter={[12, 0]}>
                      <Col span={8}>
                        <Form.Item
                          label="Website of Company"
                          name="website"
                          rules={[
                            {
                              required: true,
                              message: 'Please input Company Website!',
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col lg={8}>
                        <Form.Item
                          label="Industry"
                          name="industry"
                          rules={[
                            {
                              required: true,
                              message: 'Please input Industry!',
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col lg={8}>
                        <Form.Item
                          label="Revenue"
                          name="revenue"
                          rules={[
                            {
                              required: true,
                              message: 'Please Company Revenue!',
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      style={{ marginBottom: '-50px' }}
                      label="Description"
                      name="des"
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: 'job & requirement is required',
                      //   },
                      // ]}
                    >
                      <TextEditor
                        handleDescChange={handleDescChange}
                        defaultValue={desc}
                      />
                    </Form.Item>

                    <Button
                      style={{ marginTop: '0px', width: '150px' }}
                      size="large"
                      type="primary"
                      htmlType="submit"
                    >
                      SUBMIT
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Global Size of Company"
                      name="globalCompanySize"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Global size company!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Location"
                      name="location"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Location of Company!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Type of Company"
                      name="type"
                      rules={[
                        {
                          required: true,
                          message: 'Please Type of Company!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item label="Image">
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

export default AddCompany;
