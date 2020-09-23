import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import Subnavbar from '../../components/Layouts/Subnavbar';
import Navbar from '../../components/Layouts/Navbar';
import { useQuery } from '@apollo/client';
import { GET_NEWS, GET_BANNER_BY_NEWSPAGE } from '../../graphql/query';
// import Footer from '../../components/Layouts/Footer';
import { Layout, Row, Col, Avatar, Carousel, Spin } from 'antd';
import Footer from '../Layouts/Footer';
import RightSiteJob from '../Jobs/RightSiteJob';
import RightSiteNewspage from './RightSiteNewspage';
import { Link } from 'react-router-dom';
const { Sider, Content } = Layout;

const Newspage = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const { loading, error, data, fetchMore } = useQuery(GET_NEWS, {
    variables: { limit: 4, offset: 0 },
    // fetchPolicy: 'cache-and-network',
  });
  if (loading || !data)
    return (
      <Content style={{ marginTop: '15px' }}>
        <center>
          <Spin tip="Loading..."></Spin>
        </center>
      </Content>
    );
  console.log(data);
  if (error) return `Error! ${error.message}`;
  const DisplayBanner = () => {
    const { loading, error, data } = useQuery(GET_BANNER_BY_NEWSPAGE);
    if (loading)
      return (
        <Content style={{ marginTop: '15px' }}>
          <center>
            <Spin tip="Loading..."></Spin>
          </center>
        </Content>
      );
    console.log(data);
    if (error) return `Error! ${error.message}`;
    return (
      <div>
        <div className="newsPage-container ">
          <Carousel>
            {data.allBannerByPage.slice(0, 4).map((res, index) => {
              return (
                <div style={{ width: '10000px' }}>
                  <img
                    className="img-banner-news"
                    style={contentStyle}
                    src={'http://localhost:8080/' + res.banner}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  };
  const DisplayNews = () => {
    return (
      <Row gutter={[16, 16]}>
        {data.allNews.map((res, index) => {
          return (
            <Col className="padding-news" lg={12} md={12} key={index}>
              <div className="news-col">
                {/* <Link to={'/news/' + res._id}> */}
                <Link to={`/news/${res.id}`}>
                  <div
                    style={{
                      backgroundImage: `url("http://localhost:8080/${res.image}")`,
                    }}
                    className="image-news-style"
                  ></div>
                  <div style={{ padding: '12px' }}>
                    <h1 className="title-news">
                      {res.title.length <= 60
                        ? res.title
                        : res.title.substring(0, 60) + '......'}
                      {/* {res.title<< res.title.substring(0, 60) + '.....'} */}
                    </h1>
                    <div style={{ display: 'flex' }}>
                      <Avatar size="small" src={res.avatar} />
                      <span className="indexNewsDate">
                        {moment
                          .unix(res.createAt / 1000)
                          .format('dddd-YYYY-MM-DD')}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  };
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      <DisplayBanner />
      {/* <div className="newsPage-container ">
        <Carousel autoplay>
          <div style={{ width: '10000px' }}>
            <img
              className="img-banner-news"
              style={contentStyle}
              src="/img/banner1.jpg"
            />
          </div>
          <div>
            <img
              className="img-banner-news"
              style={contentStyle}
              src="/img/banner4.jpg"
            />
          </div>
          <div>
            <img
              className="img-banner-news"
              style={contentStyle}
              src="/img/banner5.jpg"
            />
          </div>
          <div>
            <img
              className="img-banner-news"
              style={contentStyle}
              src="/img/banner6.png"
            />
          </div>
        </Carousel>
      </div> */}
      <div className="newsPage-container">
        <Content>
          <Layout>
            <Content>
              <DisplayNews />
              <InfiniteScroll
                dataLength={data.allNews.length}
                next={async () => {
                  console.log(data.allNews.length);
                  fetchMore({
                    variables: {
                      offset: data.allNews.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;

                      if (fetchMoreResult.allNews.length < 8) {
                        setHasMoreItems(false);
                      }

                      return Object.assign({}, prev, {
                        allNews: [...prev.allNews, ...fetchMoreResult.allNews],
                      });
                    },
                  });
                }}
                hasMore={hasMoreItems}
                loader={
                  <center>
                    <img
                      style={{ height: '60px' }}
                      src="/img/Spinner-1s-200px.svg"
                    />
                  </center>
                }
                endMessage={null}
              ></InfiniteScroll>
            </Content>
            <Sider
              className="site-layout-background"
              style={{ padding: '0 24px' }}
            >
              <RightSiteNewspage />
            </Sider>
          </Layout>
        </Content>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Newspage;
