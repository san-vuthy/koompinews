import React, { useState } from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import Navbar from './Layouts/Navbar';
import SubNavbar from './Layouts/Subnavbar';
import parse from 'html-react-parser';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from './Layouts/Footer';
import { useQuery } from '@apollo/client';
import { GET_ABOUT } from '../graphql/query';

const About = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_ABOUT, {
    variables: { limit: 6, offset: 0 },
  });
  if (loading || !data) return 'loading......';
  console.log(data);
  if (error) return `Error! ${error.message}`;
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div
        style={{ backgroundImage: `url("/img/banner6.png")` }}
        className="middle-describe-event"
      >
        {/* <h1>Your main Title Describtion</h1>
        <h4>Sub Describtion</h4> */}
      </div>
      {data.allAbout.map((res, index) => {
        if (index % 2 === 0) {
          return (
            <div className="about-container">
              <Row>
                <Col lg={12}>
                  <div>
                    <div style={{ marginTop: '120px' }}>
                      <center>
                        <h1 style={{ textDecoration: 'underline' }}>
                          {res.title}
                        </h1>
                      </center>
                    </div>
                  </div>
                </Col>
                <Col lg={12}>
                  <div style={{ marginTop: '60px' }}>
                    <Card
                      className="card-knowledge"
                      bordered={false}
                      //   style={{ width: 300 }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <Avatar
                          size={64}
                          src={'http://localhost:8080/' + res.avarta}
                        />
                      </div>

                      <p>{parse(res.des)}</p>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          );
        } else {
          return (
            <div className="about-container">
              <Row>
                <Col lg={12}>
                  <div style={{ marginTop: '60px' }}>
                    <Card
                      className="card-knowledge"
                      bordered={false}
                      //   style={{ width: 300 }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <Avatar
                          size={64}
                          src={'http://localhost:8080/' + res.avarta}
                        />
                      </div>

                      <p>{parse(res.des)}</p>
                    </Card>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <div style={{ marginTop: '120px' }}>
                      <center>
                        <h1 style={{ textDecoration: 'underline' }}>
                          {res.title}
                        </h1>
                      </center>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          );
        }
      })}
      <InfiniteScroll
        dataLength={data.allAbout.length}
        next={async () => {
          console.log(data.allAbout.length);
          fetchMore({
            variables: {
              offset: data.allAbout.length,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;

              if (fetchMoreResult.allAbout.length < 8) {
                setHasMoreItems(false);
              }

              return Object.assign({}, prev, {
                allAbout: [...prev.allAbout, ...fetchMoreResult.allAbout],
              });
            },
          });
        }}
        hasMore={hasMoreItems}
        loader={
          <center>
            <img style={{ height: '60px' }} src="/img/Spinner-1s-200px.svg" />
          </center>
        }
        endMessage={null}
      ></InfiniteScroll>
      {/* <div
        style={{ backgroundImage: `url("/img/banner6.png")` }}
        className="middle-describe-About"
      >
       
      </div>
      <div className="about-container">
        <Row>
          <Col lg={12}>
            <div style={{ marginTop: '120px' }}>
              <center>
                <h1 style={{ textDecoration: 'underline' }}>LATEST ARTICLES</h1>
              </center>
            </div>
          </Col>
          <Col lg={12}>
            <div style={{ marginTop: '60px' }}>
              <Card
                className="card-knowledge"
                bordered={false}
                //   style={{ width: 300 }}
              >
                <div style={{ textAlign: 'center' }}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </Card>
            </div>
          </Col>
        </Row>
        <hr
          style={{
            marginTop: '60px',
            border: '1px solid rgba(196, 196, 196, 0.5)',
          }}
        ></hr>
        <Row>
          <Col lg={12}>
            <div style={{ marginTop: '60px' }}>
              <Card
                className="card-knowledge"
                bordered={false}
                //   style={{ width: 300 }}
              >
                <div style={{ textAlign: 'center' }}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </Card>
            </div>
          </Col>
          <Col lg={12}>
            <div style={{ marginTop: '120px' }}>
              <center>
                <h1 style={{ textDecoration: 'underline' }}>LATEST ARTICLES</h1>
              </center>
            </div>
          </Col>
        </Row>
      </div> */}
      <Footer />
    </React.Fragment>
  );
};

export default About;
