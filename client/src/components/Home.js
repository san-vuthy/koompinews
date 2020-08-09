import React, { useState } from 'react';
import { Row, Col, Divider, Card, Form, Button, Input } from 'antd';
import Navbar from './Layouts/Navbar';
import Subnavbar from './Layouts/Subnavbar';
import RecentPopularStories from './RecentPopularStories';
import Footer from './Layouts/Footer';

const Home = () => {
  const [state, setState] = useState([
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
  ]);
  const onFinish = (value) => {
    console.log('success', value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      <div className="banner-homepage">
        <div className="text-banner-container">
          <h1>In-depth tech stories you won't find anywhere else</h1>
          <h4>Join now and start reading the best in tech news. </h4>
        </div>
      </div>
      {state.map((res, index) => {
        if (index % 2 === 0) {
          return (
            <div>
              <Row
                gutter={[50, 0]}
                className="container margin-home-page column-reverse"
                // style={{ marginTop: "150px" }}
              >
                <Col xs={24} sm={12} md={12} lg={12}>
                  <div>
                    <Card className="Card">
                      <div
                        className="Card-internal-syle"
                        // style={{ display: 'flex' }}
                      >
                        <img
                          style={{ height: '105px', width: '190px' }}
                          src={res.img}
                        />
                        <div>
                          <h4
                            className="card-title"
                            style={{ paddingLeft: '5px' }}
                          >
                            {res.tittle}
                          </h4>
                          <div
                            style={{ paddingLeft: '5px', marginTop: '12px' }}
                          >
                            <img
                              style={{ height: '20px', borderRadius: '20px' }}
                              src={res.avatar}
                            />
                            <span> Den</span>
                            <span style={{ paddingLeft: '5px' }}>
                              {res.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph-card">{res.paragraph}</p>
                    </Card>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <div style={{ marginTop: '60px' }}>
                    <div>
                      <h1 style={{ textDecoration: 'underline' }}>
                        LATEST ARTICLES
                      </h1>
                      <p className="paragraph1-of-card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempor magna eget elit efficitur, at accumsan
                        sem placerat.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr className="hr"></hr>
            </div>
          );
        } else {
          return (
            <div>
              <Row
                gutter={[50, 0]}
                className="container margin-home-page"
                // style={{ marginTop: "150px" }}
              >
                <Col xs={24} sm={12} md={12} lg={12}>
                  <div style={{ marginTop: '60px' }}>
                    <div>
                      <h1 style={{ textDecoration: 'underline' }}>
                        LATEST ARTICLES
                      </h1>
                      <p className="paragraph1-of-card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempor magna eget elit efficitur, at accumsan
                        sem placerat.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <div>
                    <Card className="Card">
                      <div className="Card-internal-syle">
                        <img
                          style={{ height: '105px', width: '190px' }}
                          src={res.img}
                        />
                        <div>
                          <h4
                            className="card-title"
                            style={{ paddingLeft: '5px' }}
                          >
                            {res.tittle}
                          </h4>
                          <div
                            style={{ paddingLeft: '5px', marginTop: '12px' }}
                          >
                            <img
                              style={{ height: '20px', borderRadius: '20px' }}
                              src={res.avatar}
                            />
                            <span> Den</span>
                            <span style={{ paddingLeft: '5px' }}>
                              {res.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph-card">{res.paragraph}</p>
                    </Card>
                  </div>
                </Col>
              </Row>
              <hr className="hr"></hr>
            </div>
          );
        }
      })}
      <RecentPopularStories />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
