import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import Footer from '../Layouts/Footer';
// import { Col, Row } from "antd";
import {
  Layout,
  Menu,
  Breadcrumb,
  Calendar,
  Card,
  List,
  Badge,
  Select,
  Radio,
  Col,
  Row,
  Typography,
} from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import RightSiteJob from './RightSiteJob';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const HomeJobs = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="container-home-job">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Gategory</Breadcrumb.Item>
          <Breadcrumb.Item>Jobs</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={[32, 16]}>
          <Col className="padding-calender" sm={24} md={10} lg={7}>
            <div className="site-card-border-less-wrapper ">
              <Card
                title="Job Category"
                style={{
                  width: '300px',
                  border: '1px solid rgba(4, 47, 130, 0.3)',
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <h4 style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                            {item.title}
                          </h4>
                        }
                      />
                      <div>
                        <Badge count={40} className="site-badge-count-4" />
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </div>
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
                        <Select.Option className="month-item" key={`${index}`}>
                          {months[index]}
                        </Select.Option>
                      );
                    }
                    const month = value.month();

                    const year = value.year();
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                      options.push(
                        <Select.Option key={i} value={i} className="year-item">
                          {i}
                        </Select.Option>
                      );
                    }
                    return (
                      <div style={{ padding: 8, width: 400 }}>
                        <Typography.Title level={4}>
                          Custom header
                        </Typography.Title>
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
          </Col>
          <Col sm={24} md={14} lg={17}>
            <RightSiteJob />
          </Col>
        </Row>
      </div>
      <center>
        <img style={{ height: '60px' }} src="/img/Spinner-1s-200px.svg" />
      </center>
      <Footer />
    </React.Fragment>
  );
};

export default HomeJobs;
