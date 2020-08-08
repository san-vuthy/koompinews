import React from 'react';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import JobData from '../data/JobData';
import { Row, Col, Avatar, Tag, Card } from 'antd';
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
} from '@ant-design/icons';

const JobDetail = (props) => {
  console.log(props.match.params.id);
  let jobs = JobData.job.find((x) => x._id == props.match.params.id);
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="container-job-detial">
        <Row gutter={[32, 12]}>
          <Col sm={24} md={24} lg={16}>
            <div style={{ display: 'flex' }}>
              <div style={{ marginBottom: '90px' }}>
                <Avatar shape="square" size={100} src={jobs.img} />
              </div>

              <div style={{ display: ' flex', paddingLeft: '30px' }}>
                <div>
                  <h3>{jobs.job}</h3>
                  <span>
                    <AimOutlined style={{ paddingRight: '3px' }} />
                    {jobs.location}
                  </span>
                  <br></br>
                  <span>
                    <DollarOutlined style={{ paddingRight: '3px' }} />
                    {jobs.salary}
                  </span>
                  <br></br>
                  <span>
                    <CalendarOutlined style={{ paddingRight: '3px' }} />
                    {jobs.Schedule}
                  </span>
                </div>
                <div
                  className="job-detail-padding"
                  //   style={{ paddingLeft: "180px" }}
                >
                  <Tag color="default">featured</Tag>
                  <br></br>
                  <br></br>
                  <span>{jobs.date}</span>
                </div>
              </div>
            </div>
            <div>
              <Card
                bordered={false}
                title="Job description & requirements"
                style={{
                  width: 'auto',
                  // backgroundColor: '#f0f4f5',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09)',
                }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
            <div style={{ marginTop: '40px' }}>
              <Card
                style={{
                  width: 'auto',
                  // backgroundColor: '#f0f4f5',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09)',
                }}
                bordered={false}
                title="Required Skills"
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
          <Col className="right-site-job-detail" sm={24} md={24} lg={8}>
            <div>
              <h4
                style={{
                  border: '1px solid #C4C4C4',
                  borderLeft: '5px solid #373738',
                  padding: '10px 10px 10px 10px',
                }}
              >
                Similar Jobs
              </h4>
            </div>
            <div style={{ display: 'flex', marginTop: '30px' }}>
              <div style={{ marginBottom: '90px' }}>
                <Avatar shape="square" size={100} src={jobs.img} />
              </div>

              <div style={{ display: ' flex', paddingLeft: '30px' }}>
                <div>
                  <h3 style={{ marginBottom: '-8px' }}>{jobs.job}</h3>
                  <span>{jobs.location}</span>
                  <br></br>
                  {/* <span>{jobs.salary}</span>
                                    <br></br>
                                    <span>{jobs.Schedule}</span> */}
                </div>
                <div style={{ paddingLeft: '30px' }}>
                  <Tag color="default">featured</Tag>
                  <br></br>
                  <br></br>
                  <span>{jobs.date}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default JobDetail;
