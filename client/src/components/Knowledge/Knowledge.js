import React from 'react';
import Navbar from '../Layouts/Navbar';
import Subnavbar from '../Layouts/Subnavbar';
import Footer from '../Layouts/Footer';
import { Input, Card, Row, Col, Avatar, Spin, Layout } from 'antd';
import { useQuery } from '@apollo/client';
import {
  GET_KNOWLEDGE,
  GET_BANNER_BY_KNOWLEDGEPAGE,
} from '../../graphql/query';
import parse from 'html-react-parser';

const { Search } = Input;
const { Content } = Layout;
const Knowledge = () => {
  const { loading, data, error } = useQuery(GET_KNOWLEDGE);
  const { loading: loading1, data: data1, error: error1 } = useQuery(
    GET_BANNER_BY_KNOWLEDGEPAGE
  );
  if (loading || !data) {
    return (
      <Content style={{ marginTop: '15px' }}>
        <center>
          <Spin tip="Loading..."></Spin>
        </center>
      </Content>
    );
  }

  console.log(data);
  if (error) return `Error! ${error.message}`;
  if (loading1 || !data1) {
    return (
      <Content style={{ marginTop: '15px' }}>
        <center>
          <Spin tip="Loading..."></Spin>
        </center>
      </Content>
    );
  }

  console.log(data1);
  if (error1) return `Error! ${error1.message}`;

  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      {data.allKnowledge.slice(0, 1).map((res, index) => {
        return (
          <div>
            {data1.allBannerByPage.slice(-1).map((ress, index) => {
              return (
                <div
                  style={{
                    backgroundImage: `url("http://localhost:8080/${ress.banner}")`,
                  }}
                  className="banner-knowledge"
                  // className="middle-describe-event"
                >
                  <div className="container-Knowledge">
                    <center>
                      <h1 style={{ color: '#fff', fontSize: '50px' }}>
                        {res.maintitle}
                      </h1>
                      <Search
                        className="search-knowledge"
                        placeholder="Search the knowledge Base"
                        onSearch={(value) => console.log(value)}
                        style={{ width: 500, height: 50, borderRadius: 48 }}
                      />
                    </center>
                  </div>
                </div>
              );
            })}

            <div className="container-Knowledge">
              <div style={{ justifyContent: 'center', marginTop: '-84px' }}>
                <Row gutter={[32, 32]}>
                  <Col md={8} lg={8}>
                    <div className="site-card-border-less-wrapper">
                      <Card
                        className="card-knowledge"
                        bordered={false}
                        //   style={{ width: 300 }}
                      >
                        <div
                          style={{ textAlign: 'center', marginTop: '-50px' }}
                        >
                          <Avatar
                            size={64}
                            src={'http://localhost:8080/' + res.faqavatar}
                          />
                        </div>
                        <center>
                          <h1>FAQs</h1>
                        </center>
                        <p>{res.faq}</p>
                      </Card>
                    </div>
                  </Col>
                  <Col md={8} lg={8}>
                    <div className="site-card-border-less-wrapper">
                      <Card className="card-knowledge" bordered={false}>
                        <div
                          style={{ textAlign: 'center', marginTop: '-50px' }}
                        >
                          <Avatar
                            size={64}
                            src={'http://localhost:8080/' + res.klbavatar}
                          />
                        </div>
                        <center>
                          <h1>Knowledge Base</h1>
                        </center>
                        <p>{res.klb}</p>
                      </Card>
                    </div>
                  </Col>
                  <Col md={8} lg={8}>
                    <div className="site-card-border-less-wrapper">
                      <Card className="card-knowledge" bordered={false}>
                        <div
                          style={{ textAlign: 'center', marginTop: '-50px' }}
                        >
                          <Avatar
                            size={64}
                            src={'http://localhost:8080/' + res.sfavatar}
                          />
                        </div>
                        <center>
                          <h1>Support Forum</h1>
                        </center>
                        <p>{res.sf}</p>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="container-Knowledge">
              <div style={{ marginTop: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col sm={24} md={12} lg={12}>
                    <Card
                      bordered={false}
                      title="Lasted Knowledge Base"
                      style={{
                        height: '500px',
                        background: '#FFFFFF',
                        border: ' 1px solid #8F8E8E',
                        boxSizing: 'border-box',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {parse(res.lastbase)}
                    </Card>
                  </Col>
                  <Col sm={24} md={12} lg={12}>
                    <Card
                      bordered={false}
                      title="Recent Topic"
                      style={{
                        height: '500px',
                        background: '#FFFFFF',
                        border: ' 1px solid #8F8E8E',
                        boxSizing: 'border-box',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {parse(res.recentbase)}
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </React.Fragment>
  );
};

export default Knowledge;
