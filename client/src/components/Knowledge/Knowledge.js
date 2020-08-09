import React from 'react';
import Navbar from '../Layouts/Navbar';
import Subnavbar from '../Layouts/Subnavbar';
import Footer from '../Layouts/Footer';
import { Input, Card, Row, Col, Avatar } from 'antd';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';

const { Search } = Input;
const Knowledge = () => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      <div className="banner-knowledge">
        <div className="container-Knowledge">
          <center>
            <h1 style={{ color: '#fff', fontSize: '50px' }}>
              HOW CAN WE HELP?
            </h1>
            <Search
              placeholder="Search the knowledge Base"
              onSearch={(value) => console.log(value)}
              style={{ width: 500, height: 50, borderRadius: 48 }}
            />
            {/* <Search
              style={{
                width: 500,
                height: 50,
                borderRadius: '48px !important',
              }}
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              enterButton
            /> */}
          </center>
        </div>
      </div>
      <div className="container-Knowledge">
        <div style={{ justifyContent: 'center', marginTop: '-84px' }}>
          <Row gutter={[32, 32]}>
            <Col lg={8}>
              <div className="site-card-border-less-wrapper">
                <Card
                  className="card-knowledge"
                  bordered={false}
                  //   style={{ width: 300 }}
                >
                  <div style={{ textAlign: 'center', marginTop: '-50px' }}>
                    <Avatar size={64} icon={<UserOutlined />} />
                  </div>
                  <center>
                    <h1>FAQs</h1>
                  </center>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card>
              </div>
            </Col>
            <Col lg={8}>
              <div className="site-card-border-less-wrapper">
                <Card
                  className="card-knowledge"
                  bordered={false}
                  //   style={{ width: 300 }}
                >
                  <div style={{ textAlign: 'center', marginTop: '-50px' }}>
                    <Avatar size={64} icon={<UserOutlined />} />
                  </div>
                  <center>
                    <h1>Knowledge Base</h1>
                  </center>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card>
              </div>
            </Col>
            <Col lg={8}>
              <div className="site-card-border-less-wrapper">
                <Card
                  className="card-knowledge"
                  bordered={false}
                  //   style={{ width: 300 }}
                >
                  <div style={{ textAlign: 'center', marginTop: '-50px' }}>
                    <Avatar size={64} icon={<UserOutlined />} />
                  </div>
                  <center>
                    <h1>Support Forum</h1>
                  </center>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                  </p>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container-Knowledge">
        <div style={{ marginTop: '30px' }}>
          <Row gutter={[16, 16]}>
            <Col sm={24} md={12} lg={12}>
              <Card
                // width={500}
                bordered={false}
                title="Lasted Knowledge Base"
                style={{
                  // width: '500px',
                  height: '500px',
                  background: '#FFFFFF',
                  border: ' 1px solid #8F8E8E',
                  boxSizing: 'border-box',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                }}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Card
                // width={500}
                bordered={false}
                title="Recent Topic"
                style={{
                  // width: '500px',
                  height: '500px',
                  background: '#FFFFFF',
                  border: ' 1px solid #8F8E8E',
                  boxSizing: 'border-box',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Knowledge;
