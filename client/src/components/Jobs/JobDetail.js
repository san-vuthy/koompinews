import React, { useState, useEffect } from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import moment from 'moment';
import JobData from '../data/JobData';
import Footer from '../Layouts/Footer';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_A_JOB } from '../../graphql/query';
import { ADD_CV } from '../../graphql/mutaion';
import parse from 'html-react-parser';
import {
  Row,
  Col,
  Avatar,
  Tag,
  Card,
  Button,
  Modal,
  Form,
  Input,
  Upload,
  message,
} from 'antd';
import {
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
  DoubleRightOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const JobDetail = (props) => {
  const [addCv] = useMutation(ADD_CV);
  const [file, setFile] = useState('');
  const [loading1, setLoading] = useState(false);
  const [state, setState] = useState({
    loaing: false,
    visible: false,
  });
  const showModal = () => {
    setState({
      visible: true,
    });
  };
  const handleOk = () => {
    setState({ loaing: true });
    setTimeout(() => {
      setState({ loaing: false, visible: false });
    }, 3000);
  };
  const handleCancel = () => {
    setState({ visible: false });
  };

  const onFinish = (value) => {
    addCv({
      variables: {
        ...value,
        file: file,
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.addCv.message);
    });
    console.log('suceess', value);
  };
  const uploadFile = {
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
        setFile(info.file.name.replace(/\s+/g, '-').toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  // console.log(props.match.params.id);
  // let jobs = JobData.job.find((x) => x._id == props.match.params.id);
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_A_JOB, {
    variables: { id },
  });
  if (loading) return 'loading......';
  console.log(data);
  if (error) return `Error! ${error.message}`;
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="container-job-detial">
        <Row gutter={[32, 12]}>
          <Col sm={24} md={24} lg={16}>
            <div style={{ display: 'flex' }}>
              <div style={{ marginBottom: '90px' }}>
                <Avatar
                  shape="square"
                  size={100}
                  src={'http://localhost:8080/' + data.aJob.image}
                />
              </div>

              <div style={{ display: ' flex', paddingLeft: '30px' }}>
                <div>
                  <h3>{data.aJob.job}</h3>
                  <span>
                    <AimOutlined style={{ paddingRight: '3px' }} />
                    {data.aJob.location}
                  </span>
                  <br></br>
                  <span>
                    <DollarOutlined style={{ paddingRight: '3px' }} />
                    {data.aJob.salary}
                  </span>
                  <br></br>
                  <span>
                    <CalendarOutlined style={{ paddingRight: '3px' }} />
                    {data.aJob.worktime}
                  </span>
                </div>
                <div
                  className="job-detail-padding"
                  //   style={{ paddingLeft: "180px" }}
                >
                  <Tag color="default">featured</Tag>
                  <br></br>
                  <br></br>
                  <span>
                    {moment
                      .unix(data.aJob.createAt / 1000)
                      .format('YYYY-MM-DD')}
                  </span>
                  <br></br>
                  <Button
                    onClick={showModal}
                    style={{
                      marginTop: '30px',
                      borderRadius: '22px',
                      background: '#042F82',
                      color: '#fff',
                    }}
                  >
                    Apply Now
                    <DoubleRightOutlined />
                  </Button>
                  <Modal
                    // style={{ width: 700 }}
                    width={550}
                    visible={state.visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      // <Button key="back" onClick={handleCancel}>
                      //   Return
                      // </Button>,
                      <Button
                        key="submit"
                        // type="primary"
                        type="default"
                        danger
                        loading={state.loading}
                        onClick={handleOk}
                      >
                        Close
                      </Button>,
                    ]}
                  >
                    <div className="cv-banner">
                      <center>
                        <div style={{ marginTop: '19px' }}>
                          <h1 style={{ color: '#fff' }}>CV SUBMISSION</h1>
                          <h3 style={{ color: '#fff' }}>
                            Do you want to work with us? Please fill in your
                            details below
                          </h3>
                        </div>
                      </center>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                      <Form onFinish={onFinish}>
                        <center>
                          <Form.Item
                            label="First Name"
                            name="firstname"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your First Name',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            label="Last Name"
                            name="lastname"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Last Name',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Email Address',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            label="Position Apply For"
                            name="position"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Position',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            label="Additional Information"
                            name="additional"
                            rules={[
                              {
                                required: true,
                                message:
                                  'Please input your Additional information',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            rules={[
                              {
                                required: true,
                                message: 'Please Uplaod your CV!',
                              },
                            ]}
                            label="Upload File"
                            name="file"
                          >
                            <Upload {...uploadFile}>
                              <Button className="button-upload">
                                <UploadOutlined /> Select File
                              </Button>
                            </Upload>
                          </Form.Item>
                          <Button
                            style={{ width: '190px' }}
                            type="primary"
                            htmlType="submit"
                          >
                            Submit
                          </Button>
                        </center>
                      </Form>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>

            <div>
              <Card
                bordered={false}
                title="Job description & requirements"
                style={{
                  width: 'auto',
                  // backgroundColor: '#f0f4f5',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09)',
                }}
              >
                {parse(data.aJob.des)}
              </Card>
            </div>
            <div style={{ marginTop: '40px' }}>
              <Card
                style={{
                  width: 'auto',
                  // backgroundColor: '#f0f4f5',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09)',
                }}
                bordered={false}
                title="Required Skills"
              >
                {parse(data.aJob.requireSkill)}
              </Card>
            </div>
          </Col>
          <Col className="right-site-job-detail" sm={24} md={24} lg={8}></Col>
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default JobDetail;
