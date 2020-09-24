import React from 'react';
import {
  Layout,
  Row,
  Col,
  Avatar,
  List,
  Card,
  Select,
  Radio,
  Calendar,
  Tag,
  Spin,
  Collapse,
} from 'antd';
import moment from 'moment';
import {
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
} from '@ant-design/icons';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import Footer from '../Layouts/Footer';
import { useQuery } from '@apollo/client';
import { GET_JOB_CATEGORY, GET_JOB_BY_CATE } from '../../graphql/query';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const { Panel } = Collapse;
const { Sider, Content } = Layout;
const JobByCate = () => {
  // const [showMore, setShowMore] = useState(true);
  const { loading, error, data } = useQuery(GET_JOB_CATEGORY);

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

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  const DisplayJobCate = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_JOB_BY_CATE, {
      variables: { id: id, limit: 2, offset: 0 },
    });
    if (loading)
      return (
        <Content style={{ marginTop: '15px' }}>
          <center>
            <Spin></Spin>
          </center>
        </Content>
      );
    return (
      <div>
        {data.allJobByCate == '' ? (
          <center>
            <h1>No result found</h1>
          </center>
        ) : (
          data.allJobByCate.map((res, index) => {
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
          })
        )}
      </div>
    );
  };
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div style={{ marginTop: '40px' }} className="container-home-job">
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
                {data.allJobCategories.map((res, index) => {
                  return (
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
                  );
                })}
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
