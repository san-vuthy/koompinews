import React from 'react';
import { Row, Col, Input, Form, Button } from 'antd';
import {
  SettingOutlined,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
} from '@ant-design/icons';

const Footer = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <React.Fragment>
      {/* <div className="footer">
        <Row gutter={[50, 0]} className="footer-container">
          <Col xs={24} sm={24} md={12} lg={6}>
            <div>
              <h1 style={{ color: '#FFFFFF' }}>Company Logo</h1>
              <p style={{ color: '#FFFFFF' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tempor magna eget elit efficitur, at accumsan sem
                placerat. Nulla tellus libero, mattis nec molestie at, facilisis
                ut turpis. Vestibulum dolor metus, tincidunt eget odio
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h1 style={{ color: '#FFFFFF', fontSize: '19px' }}>Information</h1>
            <span style={{ color: '#716E6E' }}>About us</span>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h1 style={{ color: '#FFFFFF', fontSize: '19px' }}>Help</h1>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h1 style={{ color: '#FFFFFF', fontSize: '19px' }}>
              Social Networks
            </h1>
          </Col>
        </Row>
      </div> */}
      <div className="footer ">
        <div className="footer-container" style={{ marginBottom: 16 }}>
          <center>
            {/* <h1 style={{ marginTop: '30px', color: '#fff' }}>Contact us</h1> */}
            <img
              style={{
                height: '100px',
                marginTop: '30px',
                marginBottom: '10px',
              }}
              src="/img/Koompi-Black-H.png"
            />
            <br></br>
            <div className="header-footer ">
              <p style={{ paddingRight: '15px' }}>News</p>
              <p style={{ paddingRight: '15px' }}>JOBS</p>
              <p style={{ paddingRight: '15px' }}>COMPANIES</p>
              <p style={{ paddingRight: '15px' }}>EVENT</p>
              <p style={{ paddingRight: '15px' }}>ABOUT</p>
              <p style={{ paddingRight: '15px' }}>KNOWLEDGE</p>
              <p style={{ paddingRight: '15px' }}>ADVERTICE</p>
            </div>
            <img
              style={{ color: 'red', height: '40px', paddingRight: '16px' }}
              src="/img/facebook.svg"
            />
            <img
              style={{ height: '40px', paddingRight: '16px' }}
              src="/img/instagram.svg"
            />
            <img
              style={{ height: '40px', paddingRight: '16px' }}
              src="/img/twitter.svg"
            />
            <img src="https://img.icons8.com/fluent/48/000000/telegram-app.png" />

            <div style={{ marginTop: '20px' }}>
              <h3 style={{ color: 'rgba(211, 203, 203, 0.85)' }}>
                COMPANY © 2020 All Rights Reserved
              </h3>
            </div>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
