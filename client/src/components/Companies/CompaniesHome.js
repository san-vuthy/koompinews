import React from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import { Link } from 'react-router-dom';
import { Breadcrumb, Avatar } from 'antd';
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
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="middle-describe-event">
        <h1>Banner of Company</h1>
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
                <div
                  className="display-company-home"
                  //   style={{ display: "flex", marginTop: "60px" }}
                >
                  {/* <Link to={'/companies/' + res._id}> */}
                  <div
                    className="display-company-home-img"
                    style={{ marginBottom: '60px' }}
                  >
                    <Avatar
                      className="avartar-company"
                      shape="square"
                      size={188}
                      src={res.img}
                    />
                  </div>
                  {/* </Link> */}
                  {/* <Link to={'/companies/' + res._id}> */}
                  <div
                    className="righ-site-company-style"
                    //   style={{ display: " flex", paddingLeft: "12px" }}
                  >
                    <div className="describe-opunity-company">
                      <h1 style={{ marginBottom: '-5px', marginTop: '-14px' }}>
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
                  {/* </Link> */}
                </div>
                <hr
                  style={{ border: '1px solid rgba(196, 196, 196, 0.5)' }}
                ></hr>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CompaniesHome;
