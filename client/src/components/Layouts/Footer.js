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
            <h1 style={{ marginTop: '30px' }}>Contact us</h1>

            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
            <img src="https://img.icons8.com/fluent/48/000000/telegram-app.png" />
          </center>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
