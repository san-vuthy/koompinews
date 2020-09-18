import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Avatar, Tag, List, Spin, Layout } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import JobData from '../data/JobData';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../../graphql/query';
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
} from '@ant-design/icons';
const { Sider, Content } = Layout;
const RightSiteJob = () => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_JOBS, {
    variables: { limit: 6, offset: 0 },
  });
  if (loading || !data)
    return (
      <Content style={{ marginTop: '15px' }}>
        <center>
          <Spin></Spin>
        </center>
      </Content>
    );
  console.log(data);
  if (error) return `Error! ${error.message}`;
  const DisplayJobs = () => {
    return (
      <div>
        {data.allJob.map((res, index) => {
          return (
            <div className="hover-jobs">
              <List.Item>
                <div className="display-rigth-site-job ">
                  {/* <Link key={index} to={'/jobs/' + res._id}> */}
                  <Link to={`/jobs/${res.id}`}>
                    <div style={{ marginBottom: '5px' }}>
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
      <DisplayJobs />
      <InfiniteScroll
        dataLength={data.allJob.length}
        next={async () => {
          console.log(data.allJob.length);
          fetchMore({
            variables: {
              offset: data.allJob.length,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;

              if (fetchMoreResult.allJob.length < 8) {
                setHasMoreItems(false);
              }

              return Object.assign({}, prev, {
                allJob: [...prev.allJob, ...fetchMoreResult.allJob],
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
    </React.Fragment>
  );
};

export default RightSiteJob;
