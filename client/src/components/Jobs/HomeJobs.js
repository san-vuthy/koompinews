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
  Typography,
} from 'antd';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import RightSiteJob from './RightSiteJob';
import Footer from '../Layouts/Footer';
import { useQuery } from '@apollo/client';
import { GET_JOB_CATEGORY, GET_JOB_BY_CATE } from '../../graphql/query';

const { Sider, Content } = Layout;
const HomeJobs = () => {
  const [id, setId] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_JOB_CATEGORY);
  const { loading: loading1, data: data1 } = useQuery(GET_JOB_BY_CATE, {
    variables: { id },
  });
  if (loading) return 'Loading...';
  console.log(data);
  if (error) return `Error! ${error.message}`;

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  // const data = [
  //   {
  //     title: 'Ant Design Title 1',
  //   },
  //   {
  //     title: 'Ant Design Title 2',
  //   },
  //   {
  //     title: 'Ant Design Title 3',
  //   },
  //   {
  //     title: 'Ant Design Title 4',
  //   },
  // ];
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div style={{ marginTop: '40px' }} className="container-home-job">
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
                {data.allJobCategories.map((res, index) => {
                  return (
                    <div className="listJobCate" style={{ padding: '12px' }}>
                      <span>{res.name}</span>
                    </div>
                  );
                })}
              </Card>
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
