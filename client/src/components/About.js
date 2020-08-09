import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import Navbar from './Layouts/Navbar';
import SubNavbar from './Layouts/Subnavbar';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';
import Footer from './Layouts/Footer';

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="middle-describe-event">
        <h1>Banner of Company</h1>
        {/* <h4>Sub Describtion</h4> */}
      </div>
      <div className="about-container">
        <Row>
          <Col lg={12}>
            <div style={{ marginTop: '120px' }}>
              <center>
                <h1 style={{ textDecoration: 'underline' }}>LATEST ARTICLES</h1>
              </center>
            </div>
          </Col>
          <Col lg={12}>
            <div style={{ marginTop: '60px' }}>
              <Card
                className="card-knowledge"
                bordered={false}
                //   style={{ width: 300 }}
              >
                <div style={{ textAlign: 'center' }}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </Card>
            </div>
          </Col>
        </Row>
        <hr
          style={{
            marginTop: '60px',
            border: '1px solid rgba(196, 196, 196, 0.5)',
          }}
        ></hr>
        <Row>
          <Col lg={12}>
            <div style={{ marginTop: '60px' }}>
              <Card
                className="card-knowledge"
                bordered={false}
                //   style={{ width: 300 }}
              >
                <div style={{ textAlign: 'center' }}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </Card>
            </div>
          </Col>
          <Col lg={12}>
            <div style={{ marginTop: '120px' }}>
              <center>
                <h1 style={{ textDecoration: 'underline' }}>LATEST ARTICLES</h1>
              </center>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
