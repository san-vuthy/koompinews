import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import { Link } from 'react-router-dom';
import { Breadcrumb, Avatar, Row, Col, Rate } from 'antd';
import Footer from '../Layouts/Footer';
import CompanyData from '../data/CompanyData';
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const CompaniesHome = () => {
  // const desc = ['1.0', '2.0', '3.0', '4.0', '5.0'];
  const [state, setState] = useState(3);
  const handleChange = (state) => {
    setState(state);
  };
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div
        style={{ backgroundImage: `url("/img/banner6.png")` }}
        className="middle-describe-event"
      >
        {/* <h1>Banner of Company</h1> */}
        {/* <h4>Sub Describtion</h4> */}
      </div>
      <div className="container-company">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Gategory</Breadcrumb.Item>
          <Breadcrumb.Item>Companies</Breadcrumb.Item>
        </Breadcrumb>

        <div>
          {CompanyData.company.map((res, index) => {
            return (
              <div>
                {/* <div className="display-company-home"> */}
                <div className="display-company-home">
                  <div className="show-data-company">
                    <Avatar size={64} src={res.img} />
                    <div>
                      <h3 style={{ paddingLeft: '12px', marginBottom: '-3px' }}>
                        {res.companyName}
                      </h3>
                      <span style={{ paddingLeft: '10px', marginTop: '-13px' }}>
                        <Rate
                          tooltips={res.rate}
                          onChange={handleChange}
                          value={state}
                        />
                        {state ? (
                          <span
                            style={{ marginTop: -10 }}
                            className="ant-rate-text ant-rate-customize"
                          >
                            {res.rate[state - 1]}
                          </span>
                        ) : (
                          ''
                        )}
                      </span>
                    </div>
                  </div>
                  <Row>
                    <Col lg={8}>
                      <div style={{ marginTop: '10px' }}>
                        <h4 style={{ marginBottom: '-5px' }}>Location</h4>
                        <span>{res.location}</span>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div style={{ marginTop: '10px' }}>
                        <h4 style={{ marginBottom: '-5px' }}>
                          Gobal Company Size
                        </h4>
                        <span>{res.emp}</span>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div style={{ marginTop: '10px' }}>
                        <h4 style={{ marginBottom: '-5px' }}>Industry</h4>
                        <span>{res.type}</span>
                      </div>
                    </Col>
                  </Row>
                  <div style={{ marginTop: '15px' }}>
                    <span>{res.des}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div>
          {CompanyData.company.map((res, index) => {
            return (
              <div>
                <div
                  className="display-company-home"
                  style={{ display: 'flex', marginTop: '60px' }}
                >
                  <Link to={'/companies/' + res._id}>
                    <div
                      style={{
                        marginBottom: '60px',
                        backgroundImage: `url(${res.img})`,
                      }}
                      className="display-company-home-img"
                    ></div>
                  </Link>
                  <Link to={'/companies/' + res._id}>
                    <div
                      className="righ-site-company-style"
                      //   style={{ display: " flex", paddingLeft: "12px" }}
                    >
                      <div className="describe-opunity-company">
                        <h1
                          style={{ marginBottom: '-5px', marginTop: '-14px' }}
                        >
                          {res.companyName}
                        </h1>
                        <span style={{ color: '#797878', fontSize: '16px' }}>
                          <AimOutlined style={{ paddingRight: '3px' }} />
                          {res.location}
                        </span>
                        <br></br>
                        <span
                          style={{
                            paddingLeft: '3px',
                            color: '#797878',
                            fontSize: '16px',
                          }}
                        >
                          {res.type}
                        </span>
                        <br></br>
                        <span style={{ color: '#797878', fontSize: '16px' }}>
                          <TeamOutlined style={{ paddingRight: '3px' }} />
                          {res.emp}
                        </span>
                        <br></br>
                        <br></br>
                        <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                          {res.des.substring(0, 150)}....
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <hr
                  style={{ border: '1px solid rgba(196, 196, 196, 0.5)' }}
                ></hr>
              </div>
            );
          })}
        </div> */}
      </div>
      <center>
        <img
          style={{ height: '60px', marginTop: '30px' }}
          src="/img/Spinner-1s-200px.svg"
        />
      </center>
      <Footer />
    </React.Fragment>
  );
};

export default CompaniesHome;
