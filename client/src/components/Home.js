import React from 'react';
import { Row, Col, Spin, Layout, Card, Tag } from 'antd';
import Navbar from './Layouts/Navbar';
import moment from 'moment';
import Subnavbar from './Layouts/Subnavbar';
import RecentPopularStories from './RecentPopularStories';
import Footer from './Layouts/Footer';
import { useQuery } from '@apollo/client';
import { GET_BANNER_BY_HOMEEPAGE, GET_ALL_HOME } from '../graphql/query';
import parse from 'html-react-parser';

const { Content } = Layout;
const Home = () => {
  const { loading, error, data } = useQuery(GET_BANNER_BY_HOMEEPAGE);
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

  const DisplayHome = () => {
    const {
      loading: HomeLoading,
      error: ErrorData,
      data: HomeData,
      refetch: HomeRefetch,
    } = useQuery(GET_ALL_HOME);
    if (HomeLoading) return 'Loading...';
    console.log(HomeData);
    if (ErrorData) return `Error! ${error.message}`;
    HomeRefetch();
    return (
      <div>
        {HomeData.allHome.map((res, index) => {
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
                            alt="img"
                            style={{ height: '105px', width: '190px' }}
                            src={'http://localhost:8080/' + res.image}
                          />
                          <div>
                            {/* <h4
                              className="card-title"
                              style={{ paddingLeft: '5px' }}
                            >
                              {res.title}
                            </h4> */}
                            <div
                              style={{ paddingLeft: '5px', marginTop: '12px' }}
                            >
                              {/* <img
                                style={{ height: '20px', borderRadius: '20px' }}
                                src={res.avatar}
                              />
                              <span> Den</span> */}
                              {/* <span style={{ paddingLeft: '5px' }}>
                                {moment
                                  .unix(res.createAt / 1000)
                                  .format('YYYY-MM-DD')}
                              </span> */}
                              <Tag
                                // className="tag-time-news-article"
                                color="processing"
                              >
                                {moment
                                  .unix(res.createAt / 1000)
                                  .format('DD-MM-YYYY')}
                              </Tag>
                            </div>
                          </div>
                        </div>
                        <p className="paragraph-card">{parse(res.des)}</p>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <div style={{ marginTop: '60px' }}>
                      <div>
                        <h1 style={{ textDecoration: 'underline' }}>
                          {res.title}
                        </h1>
                        <p className="paragraph1-of-card">{res.subtitle}</p>
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
                          {res.title}
                        </h1>
                        <p className="paragraph1-of-card">{res.subtitle}</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <div>
                      <Card className="Card">
                        <div className="Card-internal-syle">
                          <img
                            alt="img"
                            style={{ height: '105px', width: '190px' }}
                            src={'http://localhost:8080/' + res.image}
                          />
                          <div>
                            {/* <h4
                              className="card-title"
                              style={{ paddingLeft: '5px' }}
                            >
                              {res.title}
                            </h4> */}
                            <div
                              style={{ paddingLeft: '5px', marginTop: '12px' }}
                            >
                              {/* <img
                                style={{ height: '20px', borderRadius: '20px' }}
                                src={res.avatar}
                              />
                              <span> Den</span> */}
                              <Tag
                                // className="tag-time-news-article"
                                color="processing"
                              >
                                {moment
                                  .unix(res.createAt / 1000)
                                  .format('DD-MM-YYYY')}
                              </Tag>
                            </div>
                          </div>
                        </div>
                        <p className="paragraph-card">{parse(res.des)}</p>
                      </Card>
                    </div>
                  </Col>
                </Row>
                <hr className="hr"></hr>
              </div>
            );
          }
        })}
      </div>
    );
  };
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      {data.allBannerByPage.slice(-1).map((res, index) => {
        return (
          <div
            style={{
              backgroundImage: `url("http://localhost:8080/${res.banner}")`,
              //   background:
              //     ' linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
            }}
            className="banner-homepage"
          >
            <div className="text-banner-container">
              <h1>In-depth tech stories you won't find anywhere else</h1>
              <h4>Join now and start reading the best in tech news. </h4>
            </div>
          </div>
        );
      })}

      <DisplayHome />
      <RecentPopularStories />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
