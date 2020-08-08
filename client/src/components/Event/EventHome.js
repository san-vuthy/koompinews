import React from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import { Breadcrumb, Row, Col, Card } from 'antd';
import EventData from '../data/EventData';
import Footer from '../Layouts/Footer';

const { Meta } = Card;

const EventHome = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="middle-describe-event">
        <h1>Your main Title Describtion</h1>
        <h4>Sub Describtion</h4>
      </div>
      <div className="container-event">
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Gategory</Breadcrumb.Item>
          <Breadcrumb.Item>Event</Breadcrumb.Item>
        </Breadcrumb>
        <h3>EVENT</h3> */}
        {/* <div className="background-banner-event">
                    <Row >
                        <Col lg={12}>
                            <div style={{ padding: "20px" }}>
                                <h1>Examples of good cover images</h1>
                                <div style={{ marginTop: "167px" }}>
                                    <h4>Thailand</h4>
                                    <h5>15-Aug-2020</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <img style={{ maxWidth: "100%" }} src="/img/news.png" />
                        </Col>
                    </Row>
                </div> */}

        <div style={{ marginTop: '40px' }}>
          <Row gutter={[16, 32]}>
            {EventData.event.map((res, index) => {
              return (
                <Col lg={12} md={12} key={index}>
                  <div className="site-card-border-less-wrapper">
                    <Card
                      bordered={false}
                      // hoverable
                      style={{
                        width: '100%',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                      }}
                      cover={<img alt="example" src={res.img} />}
                    >
                      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                      <h1>{res.title}</h1>
                      <p>{res.location}</p>
                      <p>{res.date}</p>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default EventHome;
