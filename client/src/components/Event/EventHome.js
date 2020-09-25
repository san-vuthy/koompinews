import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import { useQuery } from '@apollo/client';
import { GET_EVENT, GET_BANNER_BY_EVENTPAGE } from '../../graphql/query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Breadcrumb, Row, Col, Card, Spin, Layout } from 'antd';
import moment from 'moment';
import Footer from '../Layouts/Footer';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const EventHome = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_EVENT, {
    variables: { limit: 6, offset: 0 },
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
  function DisplayBanner() {
    const { loading, error, data } = useQuery(GET_BANNER_BY_EVENTPAGE);

    if (loading) return '';
    console.log(data);
    if (error) return `Error! ${error.message}`;
    return (
      <div>
        {data.allBannerByPage.slice(-1).map((res, index) => {
          return (
            <div
              style={{
                backgroundImage: `url("http://localhost:8080/${res.banner}")`,
              }}
              className="middle-describe-event"
            >
              {/* <h1>Your main Title Describtion</h1>
          <h4>Sub Describtion</h4> */}
              {/* <img src={'http://localhos t:8080/' + res.banner} /> */}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <DisplayBanner />

      <div className="container-event">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Gategory</Breadcrumb.Item>
          <Breadcrumb.Item>Event</Breadcrumb.Item>
        </Breadcrumb>
        <h3>EVENT</h3>

        <div style={{ marginTop: '40px' }}>
          <Row gutter={[32, 32]}>
            {data.allEvent.map((res, index) => {
              return (
                <Col lg={8} md={12} key={index}>
                  <div className="site-card-border-less-wrapper">
                    <Link to={`/event/${res.id}`}>
                      <Card
                        bordered={false}
                        // hoverable
                        style={{
                          width: '100%',
                          // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                        className="event-col"
                        cover={
                          <img
                            alt="example"
                            src={'http://localhost:8080/' + res.image}
                          />
                        }
                      >
                        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                        <h1>{res.title}</h1>
                        {/* <p>{parse(res.des)}</p> */}
                        <p>
                          {parse(
                            res.des.length <= 60
                              ? res.des
                              : res.des.substring(0, 60) + '......'
                          )}
                        </p>
                        <p>
                          {' '}
                          {moment
                            .unix(res.createAt / 1000)
                            .format('YYYY-MM-DD')}
                        </p>
                      </Card>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <InfiniteScroll
          dataLength={data.allEvent.length}
          next={async () => {
            console.log(data.allEvent.length);
            fetchMore({
              variables: {
                offset: data.allEvent.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                if (fetchMoreResult.allEvent.length < 8) {
                  setHasMoreItems(false);
                }

                return Object.assign({}, prev, {
                  allEvent: [...prev.allEvent, ...fetchMoreResult.allEvent],
                });
              },
            });
          }}
          hasMore={hasMoreItems}
          loader={
            <center>
              <img
                alt="img"
                style={{ height: '60px' }}
                src="/img/Spinner-1s-200px.svg"
              />
            </center>
          }
          endMessage={null}
        ></InfiniteScroll>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default EventHome;
