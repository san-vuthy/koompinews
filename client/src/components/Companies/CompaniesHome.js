import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import parse from 'html-react-parser';
import { useQuery } from '@apollo/client';
import { GET_COMPANIES, GET_BANNER_BY_COMPANYPAGE } from '../../graphql/query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { Breadcrumb, Avatar, Row, Col, Spin, Layout } from 'antd';
import Footer from '../Layouts/Footer';
import CompanyData from '../data/CompanyData';

const { Sider, Content } = Layout;
const CompaniesHome = () => {
  const [state, setState] = useState(3);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_COMPANIES, {
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

  const handleChange = (state) => {
    setState(state);
  };
  const DisplayBanner = () => {
    const { loading, data, error } = useQuery(GET_BANNER_BY_COMPANYPAGE);
    if (loading || !data) return 'loading......';
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
            ></div>
          );
        })}
      </div>
    );
  };
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <DisplayBanner />
      <div className="container-company">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Gategory</Breadcrumb.Item>
          <Breadcrumb.Item>Companies</Breadcrumb.Item>
        </Breadcrumb>

        <div>
          {data.allCompany.map((res, index) => {
            return (
              <div>
                {/* <div className="display-company-home"> */}
                <Link to={`/companies/${res.id}`}>
                  <div className="display-company-home">
                    <div className="show-data-company">
                      <Avatar
                        size={64}
                        src={'http://localhost:8080/' + res.image}
                      />
                      <div>
                        <h3
                          style={{
                            paddingLeft: '12px',
                            marginTop: '17px',
                          }}
                        >
                          {res.name}
                        </h3>
                      </div>
                    </div>
                    <Row>
                      <Col xs={24} sm={24} md={8} lg={8}>
                        <div style={{ marginTop: '10px' }}>
                          <h4 style={{ marginBottom: '-5px' }}>Location</h4>
                          <span style={{ color: '#797878' }}>
                            {res.location}
                          </span>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8}>
                        <div style={{ marginTop: '10px' }}>
                          <h4 style={{ marginBottom: '-5px' }}>Contact</h4>
                          <span style={{ color: '#797878' }}>{res.email}</span>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8}>
                        <div style={{ marginTop: '10px' }}>
                          <h4 style={{ marginBottom: '-5px' }}>Company</h4>
                          <span style={{ color: '#797878' }}>{res.type}</span>
                        </div>
                      </Col>
                    </Row>
                    <div style={{ marginTop: '15px' }}>
                      <span style={{ color: '#797878' }}>
                        {parse(
                          res.des.length <= 300
                            ? res.des
                            : res.des.substring(0, 300) + '......'
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <InfiniteScroll
          dataLength={data.allCompany.length}
          next={async () => {
            console.log(data.allCompany.length);
            fetchMore({
              variables: {
                offset: data.allCompany.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                if (fetchMoreResult.allCompany.length < 8) {
                  setHasMoreItems(false);
                }

                return Object.assign({}, prev, {
                  allCompany: [
                    ...prev.allCompany,
                    ...fetchMoreResult.allCompany,
                  ],
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
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default CompaniesHome;
