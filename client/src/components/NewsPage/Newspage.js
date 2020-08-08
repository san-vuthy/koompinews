import React from 'react';
import { Row, Col, Avatar, Carousel } from 'antd';
import Subnavbar from '../../components/Layouts/Subnavbar';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import RightSiteNewspage from './RightSiteNewspage';
import { Link } from 'react-router-dom';
import NewsData from '../data/NewsData';

const Newspage = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      <div className="newsPage-container ">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>

      {/* Menu news */}

      <Row className="newsPage-container padding-menu-news ">
        <Col className="padding-menu-news padding-news" md={16} lg={16}>
          <Row gutter={[16, 16]}>
            {NewsData.news.map((res, index) => {
              return (
                <Col className="padding-news" lg={12} md={12} key={index}>
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
        </Col>
        <Col className="rigth-site-padding" md={8} lg={8}>
          <RightSiteNewspage />
        </Col>
      </Row>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Newspage;
