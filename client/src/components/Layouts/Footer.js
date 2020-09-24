import React from 'react';
import { Row, Col } from 'antd';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Row gutter={[50, 0]} className="footer-container">
          <Col xs={24} sm={24} md={12} lg={6}>
            {/* <h1 style={{ color: '#FFFFFF' }}> */}
            <img
              alt="img"
              style={{ height: '40px' }}
              src="/img/transparent back-0.png"
            />
            {/* </h1> */}

            <p style={{ marginTop: '20px', color: 'rgb(179, 174, 174)' }}>
              We make this website for help people to know about new knowledge
              and find jobs
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h2 style={{ color: '#fff' }}>Information</h2>
            <div style={{ lineHeight: '30px' }}>
              <Link
                to="/about"
                style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}
              >
                About us
              </Link>
              <br></br>
              <Link
                to="/event"
                style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}
              >
                {' '}
                Event
              </Link>
              <br></br>
              <Link
                to="/knowledge"
                style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}
              >
                knowledge
              </Link>
              <br></br>
              <span style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}>
                Advertice
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h2 style={{ color: '#fff' }}>Help</h2>
            <div style={{ lineHeight: '30px' }}>
              <span style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}>
                Support
              </span>
              <br></br>
              <span style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}>
                {' '}
                Service
              </span>
              <br></br>
              <span style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}>
                Term & Condition
              </span>
              <br></br>
              <span style={{ color: 'rgb(179, 174, 174)', fontWeight: '600' }}>
                Privercy Polocy
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h2 style={{ color: '#fff' }}>Contact Us</h2>
            <div style={{ display: 'flex' }}>
              <img alt="img" style={{ width: '22px' }} src="/img/phone.svg" />
              <span
                style={{
                  color: 'rgb(179, 174, 174)',
                  fontWeight: '600',
                  paddingLeft: '12px',
                }}
              >
                086280018
              </span>
            </div>
            <br></br>
            <div style={{ display: 'flex' }}>
              <img alt="img" style={{ width: '22px' }} src="/img/mail.svg" />
              <span
                style={{
                  color: 'rgb(179, 174, 174)',
                  fontWeight: '600',
                  paddingLeft: '12px',
                }}
              >
                sarimsovanden@gmail.com
              </span>{' '}
            </div>
          </Col>
        </Row>
        <center style={{ marginTop: '20px' }}>
          {' '}
          <img
            alt="img"
            style={{ color: 'red', height: '40px', paddingRight: '16px' }}
            src="/img/facebook.svg"
          />
          <img
            alt="img"
            style={{ height: '40px', paddingRight: '16px' }}
            src="/img/instagram.svg"
          />
          <img
            alt="img"
            style={{ height: '40px', paddingRight: '16px' }}
            src="/img/twitter.svg"
          />
          <img
            alt="img"
            src="https://img.icons8.com/fluent/48/000000/telegram-app.png"
          />
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: 'rgba(211, 203, 203, 0.85)' }}>
              COMPANY © 2020 All Rights Reserved
            </h3>
          </div>
        </center>
      </div>
      {/* <div className="footer ">
        <div className="footer-container" style={{ marginBottom: 16 }}>
          <center>
           
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
      </div> */}
    </React.Fragment>
  );
};

export default Footer;
