import React, { useState } from 'react';
import {
  Layout,
  Row,
  Col,
  Avatar,
  Carousel,
  List,
  Badge,
  Card,
  Select,
  Radio,
  Calendar,
  Collapse,
  Spin,
} from 'antd';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import RightSiteJob from './RightSiteJob';
import Footer from '../Layouts/Footer';
import { useQuery } from '@apollo/client';
import { GET_JOB_CATEGORY } from '../../graphql/query';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
// import { NProgress } from '@tanem/react-nprogress';
const { Option } = Select;
const { Panel } = Collapse;
const { Sider, Content } = Layout;
const HomeJobs = () => {
  const [showMore, setShowMore] = useState(true);
  const { loading, error, data, refetch } = useQuery(GET_JOB_CATEGORY);

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

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />

      <div style={{ marginTop: '40px' }} className="container-home-job">
        {/* Mobile Show Job Category */}

        <Collapse className="Collosape" accordion>
          <Panel header="Job Category" key="1">
            {data.allJobCategories.map((res, index) => {
              return (
                <div>
                  <Link to={`/jobcategory/${res.id}`}>
                    <div className="listJobCate" style={{ padding: '12px' }}>
                      <span
                        key={res.id}
                        style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                      >
                        {res.name}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Panel>
        </Collapse>

        <Content>
          <Layout>
            <Sider
              className="site-layout-background"
              style={{ padding: '0 24px' }}
            >
              <Card
                title="Job Category"
                style={{
                  width: '300px',
                  border: '1px solid rgba(4, 47, 130, 0.3)',
                  padding: '0 !important',
                }}
              >
                <div
                  className="scroll-jobcate"
                  // style={{ overflowY: 'scroll', height: '200px' }}
                >
                  {data.allJobCategories.map((res, index) => {
                    return (
                      <Link to={`/jobcategory/${res.id}`}>
                        <div
                          className="listJobCate"
                          style={{ padding: '12px' }}
                        >
                          <span
                            key={res.id}
                            style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                          >
                            {res.name}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Card>
              {/* {showMore ? (
                <Card
                  title="Job Category"
                  style={{
                    width: '300px',
                    border: '1px solid rgba(4, 47, 130, 0.3)',
                    padding: '0 !important',
                  }}
                >
                  {data.allJobCategories.slice(0, 4).map((res, index) => {
                    return (
                      <Link to={`/jobcategory/${res.id}`}>
                        <div
                          className="listJobCate"
                          style={{ padding: '12px' }}
                        >
                          <span
                            key={res.id}
                            style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                          >
                            {res.name}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="listJobCate" style={{ paddingLeft: '12px' }}>
                    <span onClick={() => setShowMore(false)}>
                      Show More.....
                    </span>
                  </div>
                </Card>
              ) : (
                <Card
                  title="Job Category"
                  style={{
                    width: '300px',
                    border: '1px solid rgba(4, 47, 130, 0.3)',
                    padding: '0 !important',
                  }}
                >
                  {data.allJobCategories.map((res, index) => {
                    return (
                      <Link to={`/jobcategory/${res.id}`}>
                        <div
                          className="listJobCate"
                          style={{ padding: '12px' }}
                        >
                          <span
                            key={res.id}
                            style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                          >
                            {res.name}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </Card>
              )} */}

              <div className="site-calendar-demo-card">
                <div
                  className="site-calendar-customize-header-wrapper "
                  style={{
                    width: '300px',
                    border: '1px solid rgba(4, 47, 130, 0.3)',
                    //   width: 100,
                    // width: 159,
                  }}
                >
                  <Calendar
                    fullscreen={false}
                    headerRender={({ value, type, onChange, onTypeChange }) => {
                      const start = 0;
                      const end = 12;
                      const monthOptions = [];

                      const current = value.clone();
                      const localeData = value.localeData();
                      const months = [];
                      for (let i = 0; i < 12; i++) {
                        current.month(i);
                        months.push(localeData.monthsShort(current));
                      }

                      for (let index = start; index < end; index++) {
                        monthOptions.push(
                          <Select.Option
                            className="month-item"
                            key={`${index}`}
                          >
                            {months[index]}
                          </Select.Option>
                        );
                      }
                      const month = value.month();

                      const year = value.year();
                      const options = [];
                      for (let i = year - 10; i < year + 10; i += 1) {
                        options.push(
                          <Select.Option
                            key={i}
                            value={i}
                            className="year-item"
                          >
                            {i}
                          </Select.Option>
                        );
                      }
                      return (
                        <div style={{ padding: 8, width: 400 }}>
                          <h4 style={{ paddingLeft: '14px' }}>
                            Find Job by Date
                          </h4>
                          <Row gutter={8}>
                            <Col>
                              <Radio.Group
                                size="small"
                                onChange={(e) => onTypeChange(e.target.value)}
                                value={type}
                              >
                                <Radio.Button value="month">Month</Radio.Button>
                                <Radio.Button value="year">Year</Radio.Button>
                              </Radio.Group>
                            </Col>
                            <Col>
                              <Select
                                size="small"
                                dropdownMatchSelectWidth={false}
                                className="my-year-select"
                                onChange={(newYear) => {
                                  const now = value.clone().year(newYear);
                                  onChange(now);
                                }}
                                value={String(year)}
                              >
                                {options}
                              </Select>
                            </Col>
                            <Col>
                              <Select
                                size="small"
                                dropdownMatchSelectWidth={false}
                                value={String(month)}
                                onChange={(selectedMonth) => {
                                  const newValue = value.clone();
                                  newValue.month(parseInt(selectedMonth, 10));
                                  onChange(newValue);
                                }}
                              >
                                {monthOptions}
                              </Select>
                            </Col>
                          </Row>
                        </div>
                      );
                    }}
                    onPanelChange={onPanelChange}
                  />
                </div>
              </div>
            </Sider>
            <Content>
              <RightSiteJob />
            </Content>
          </Layout>
        </Content>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default HomeJobs;
