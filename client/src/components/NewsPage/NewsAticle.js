import React, { useState } from 'react';
import NewsData from '../data/NewsData';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import Footer from '../Layouts/Footer';
import { Card, Tag, Divider, Row, Col, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Data from '../data/NewsData';

const { Meta } = Card;
const NewsAticle = (props) => {
  console.log(props.match.params.id);
  const newss = NewsData.news.find((x) => x._id == props.match.params.id);
  // console.log(news.date)
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <SubNavbar />
        <div className="container-news-article " style={{ marginTop: '60px' }}>
          {/* <div style={{ marginTop: '60px' }}>
            <img style={{ maxWidth: '100%' }} src={newss.img} />
            <div className="title-news-article">
              <h1>{newss.titile}</h1>
            </div>
            <span style={{ color: '#797878', fontSize: '20px' }}>
              {newss.des}{' '}
            </span>
          </div> */}
          <Card
            // hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" src={newss.img} />}
          >
            <Tag className="tag-time-news-article" color="processing">
              {newss.date}
            </Tag>
            <h1 className="title-news-article">{newss.titile}</h1>
            <span className="des-news-article">{newss.des}</span>
          </Card>
          <Divider style={{ marginTop: '40px' }}>
            <h1>Similar Stories</h1>
          </Divider>
          <div>
            <Row gutter={(32, 16)}>
              {Data.news.map((res, index) => {
                return (
                  <Col lg={8}>
                    <div className="news-col">
                      <Link to={'/news/' + res._id}>
                        <img
                          className="image-news-style"
                          src={res.img}
                          alt="news image"
                        />
                        <div style={{ padding: '12px' }}>
                          <h1 className="title-news">{res.titile}</h1>
                          <div style={{ display: 'flex' }}>
                            <Avatar size="small" src={res.avatar} />
                            <span style={{ paddingLeft: '15px' }}>
                              {res.date}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NewsAticle;
