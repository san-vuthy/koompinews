import React, { useState, useEffect } from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import JobData from '../data/JobData';
import Footer from '../Layouts/Footer';

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
} from 'antd';
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
  DoubleRightOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const JobDetail = (props) => {
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
    console.log('suceess', value);
  };
  const fileList = [];
  const propss = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
  };
  console.log(props.match.params.id);
  let jobs = JobData.job.find((x) => x._id == props.match.params.id);

  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="container-job-detial">
        <Row gutter={[32, 12]}>
          <Col sm={24} md={24} lg={16}>
            <div style={{ display: 'flex' }}>
              <div style={{ marginBottom: '90px' }}>
                <Avatar shape="square" size={100} src={jobs.img} />
              </div>

              <div style={{ display: ' flex', paddingLeft: '30px' }}>
                <div>
                  <h3>{jobs.job}</h3>
                  <span>
                    <AimOutlined style={{ paddingRight: '3px' }} />
                    {jobs.location}
                  </span>
                  <br></br>
                  <span>
                    <DollarOutlined style={{ paddingRight: '3px' }} />
                    {jobs.salary}
                  </span>
                  <br></br>
                  <span>
                    <CalendarOutlined style={{ paddingRight: '3px' }} />
                    {jobs.Schedule}
                  </span>
                </div>
                <div
                  className="job-detail-padding"
                  //   style={{ paddingLeft: "180px" }}
                >
                  <Tag color="default">featured</Tag>
                  <br></br>
                  <br></br>
                  <span>{jobs.date}</span>
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
                            name="firstName"
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
                            name="lastName"
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
                            name="EmailAddress"
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
                            name="Position"
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
                            name="additional information"
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
                            label="Upload Image"
                            name="image"
                          >
                            <Upload {...propss}>
                              <Button
                                className="button-upload"
                                // style={{ marginLeft: '-476px' }}
                              >
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
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
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
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
          <Col className="right-site-job-detail" sm={24} md={24} lg={8}>
            <div>
              <h4
                style={{
                  border: '1px solid #C4C4C4',
                  borderLeft: '5px solid #373738',
                  padding: '10px 10px 10px 10px',
                }}
              >
                Similar Jobs
              </h4>
            </div>
            <div style={{ display: 'flex', marginTop: '30px' }}>
              <div style={{ marginBottom: '90px' }}>
                <Avatar shape="square" size={100} src={jobs.img} />
              </div>

              <div style={{ display: ' flex', paddingLeft: '30px' }}>
                <div>
                  <h3 style={{ marginBottom: '-8px' }}>{jobs.job}</h3>
                  <span>{jobs.location}</span>
                  <br></br>
                  {/* <span>{jobs.salary}</span>
                                    <br></br>
                                    <span>{jobs.Schedule}</span> */}
                </div>
                <div style={{ paddingLeft: '30px' }}>
                  <Tag color="default">featured</Tag>
                  <br></br>
                  <br></br>
                  <span>{jobs.date}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default JobDetail;
