// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { Avatar, Tag, List } from 'antd';
// import InfiniteScroll from 'react-infinite-scroll-component';

// import JobData from '../data/JobData';
// import { useQuery } from '@apollo/client';
// import { GET_JOB_BY_CATE } from '../../graphql/query';
// import {
//   DollarCircleTwoTone,
//   DollarOutlined,
//   CalendarOutlined,
//   AimOutlined,
// } from '@ant-design/icons';
// import { useParams } from 'react-router-dom';

// const JobByCate = () => {
//   const { id } = useParams();
//   const [hasMoreItems, setHasMoreItems] = useState(true);
// const { loading, error, data, fetchMore } = useQuery(GET_JOB_BY_CATE, {
//   variables: { id: id, limit: 2, offset: 0 },
// });
//   if (loading || !data) return 'loading......';
//   console.log(data);
//   if (error) return `Error! ${error.message}`;
//   const DisplayJobs = () => {
//     return (
// <div>
// {data.allJobByCate.map((res, index) => {
//   return (
//     <div>
//       <List.Item>
//         <div className="display-rigth-site-job">
//           {/* <Link key={index} to={'/jobs/' + res._id}> */}
//           <Link to={`/jobs/${res.id}`}>
//             <div style={{ marginBottom: '27px' }}>
//               <Avatar
//                 shape="square"
//                 size={100}
//                 src={'http://localhost:8080/' + res.image}
//               />
//             </div>
//           </Link>
//           <Link to={`/jobs/${res.id}`}>
//             <div
//               className="job-rigth-site"
//               style={{ paddingLeft: '20px' }}
//             >
//               <div className="describe-opunity-job">
//                 <div>
//                   <h3>{res.position}</h3>
//                 </div>
//                 <span>
//                   <AimOutlined style={{ paddingRight: '3px' }} />
//                   {res.location}
//                 </span>
//                 <br></br>
//                 <span>
//                   <DollarOutlined style={{ paddingRight: '3px' }} />
//                   {res.salary}
//                 </span>
//                 <br></br>
//                 <span>
//                   <CalendarOutlined style={{ paddingRight: '3px' }} />
//                   {res.worktime}
//                 </span>
//               </div>
//             </div>
//           </Link>
//         </div>
//         <div>
//           <Tag color="default">featured</Tag>
//           <br></br>
//           <br></br>
//           <span>
//             {moment.unix(res.createAt / 1000).format('YYYY-MM-DD')}
//           </span>
//         </div>
//       </List.Item>
//       <hr
//         className="hr-job"
//         style={{ border: '1px solid rgba(196, 196, 196, 0.5)' }}
//       ></hr>
//     </div>
//   );
// })}
//       </div>
//     );
//   };
//   return (
//     <React.Fragment>
//       <DisplayJobs />
//     </React.Fragment>
//   );
// };

// export default JobByCate;

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
  Tag,
} from 'antd';
import moment from 'moment';
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
} from '@ant-design/icons';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import RightSiteJob from './RightSiteJob';
import Footer from '../Layouts/Footer';
import { useQuery } from '@apollo/client';
import { GET_JOB_CATEGORY, GET_JOB_BY_CATE } from '../../graphql/query';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const { Sider, Content } = Layout;
const JobByCate = () => {
  const { loading, error, data, refetch } = useQuery(GET_JOB_CATEGORY);

  if (loading) return 'Loading...';
  console.log(data);
  if (error) return `Error! ${error.message}`;

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  const DisplayJobCate = () => {
    const { id } = useParams();
    const { loading, error, data, fetchMore } = useQuery(GET_JOB_BY_CATE, {
      variables: { id: id, limit: 2, offset: 0 },
    });
    if (loading) return 'loading.....';
    return (
      <div>
        {data.allJobByCate.map((res, index) => {
          return (
            <div>
              <List.Item>
                <div className="display-rigth-site-job">
                  {/* <Link key={index} to={'/jobs/' + res._id}> */}
                  <Link to={`/jobs/${res.id}`}>
                    <div style={{ marginBottom: '27px' }}>
                      <Avatar
                        shape="square"
                        size={100}
                        src={'http://localhost:8080/' + res.image}
                      />
                    </div>
                  </Link>
                  <Link to={`/jobs/${res.id}`}>
                    <div
                      className="job-rigth-site"
                      style={{ paddingLeft: '20px' }}
                    >
                      <div className="describe-opunity-job">
                        <div>
                          <h3>{res.position}</h3>
                        </div>
                        <span>
                          <AimOutlined style={{ paddingRight: '3px' }} />
                          {res.location}
                        </span>
                        <br></br>
                        <span>
                          <DollarOutlined style={{ paddingRight: '3px' }} />
                          {res.salary}
                        </span>
                        <br></br>
                        <span>
                          <CalendarOutlined style={{ paddingRight: '3px' }} />
                          {res.worktime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Tag color="default">featured</Tag>
                  <br></br>
                  <br></br>
                  <span>
                    {moment.unix(res.createAt / 1000).format('YYYY-MM-DD')}
                  </span>
                </div>
              </List.Item>
              <hr
                className="hr-job"
                style={{ border: '1px solid rgba(196, 196, 196, 0.5)' }}
              ></hr>
            </div>
          );
        })}
      </div>
    );
  };
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
                    <Link to={`/jobcategory/${res.id}`}>
                      <div className="listJobCate" style={{ padding: '12px' }}>
                        <span
                          style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                          key={res.id}
                        >
                          {res.name}
                        </span>
                      </div>
                    </Link>
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
              <DisplayJobCate />
            </Content>
          </Layout>
        </Content>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default JobByCate;
