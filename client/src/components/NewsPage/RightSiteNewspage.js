import React, { useState } from 'react';
import { Avatar, Card, Input, Tag, Affix } from 'antd';

const RightSiteNewspage = () => {
  const [des, setDes] = useState([
    {
      avatar: '/img/jobsuche_blue.jpg',
      des: ' The fall of an ecommerce startup and other top stories this week',
    },
    {
      avatar: '/img/jobsuche_blue.jpg',
      des: ' The fall of an ecommerce startup and other top stories this week',
    },
    {
      avatar: '/img/jobsuche_blue.jpg',
      des: ' The fall of an ecommerce startup and other top stories this week',
    },
    {
      avatar: '/img/jobsuche_blue.jpg',
      des: ' The fall of an ecommerce startup and other top stories this week',
    },
  ]);

  const [lastjob, setLastjob] = useState([
    {
      img: '/img/jobsuche_blue.jpg',
      titile: 'KOOMPI Company',
      pos: 'Graphic Design',
      Date: '20/20/2020',
    },
    {
      img: '/img/jobsuche_blue.jpg',
      titile: 'KOOMPI Company',
      pos: 'Graphic Design',
      Date: '20/20/2020',
    },
    {
      img: '/img/jobsuche_blue.jpg',
      titile: 'KOOMPI Company',
      pos: 'Graphic Design',
      Date: '20/20/2020',
    },
  ]);
  return (
    <React.Fragment>
      <div className="right-site-news">
        {/* <Affix offsetTop={49}> */}
        <div>
          <h4
            style={{
              border: '1px solid #C4C4C4',
              borderLeft: '5px solid #373738',
              padding: '10px 10px 10px 10px',
            }}
          >
            Most Popular
          </h4>
        </div>
        <div style={{ marginTop: '30px' }}>
          {des.map((res, index) => {
            return (
              <div style={{ display: ' flex', marginTop: '19px' }}>
                <Avatar size="large" shape="square" src={res.avatar} />
                <span style={{ paddingLeft: '12px', color: '#010101' }}>
                  {res.des}
                </span>
              </div>
            );
          })}
        </div>

        {/* Subscribe box */}
        <div style={{ marginTop: '30px' }}>
          <Card
            className="subscribe-box"
            style={{ width: 300, backgroundColor: ' #275178' }}
          >
            <h1 style={{ color: '#FFFFFF' }}>Subscribe</h1>
            <span style={{ color: '#FFFFFF' }}>
              Get all latest content delivered to your email a few times a
              month.
            </span>
            <div style={{ marginTop: '12px' }}>
              <Input placeholder="Email" />
            </div>
          </Card>
        </div>

        {/* Lastes Jobs site */}
        <div style={{ marginTop: ' 30px' }}>
          <h4
            style={{
              border: '1px solid #C4C4C4',
              borderLeft: '5px solid #042F82',
              padding: '10px 10px 10px 10px',
            }}
          >
            Lastest Jobs
          </h4>
          <div style={{ marginTop: '30px' }}>
            {lastjob.map((res, index) => {
              return (
                <div style={{ display: 'flex' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <Avatar
                      style={{ borderRadius: '40px' }}
                      shape="square"
                      size={64}
                      src={res.img}
                    />
                  </div>
                  <div style={{ display: ' flex', paddingLeft: '12px' }}>
                    <div>
                      <h3 style={{ marginBottom: '-8px' }}>{res.titile}</h3>
                      <span>{res.pos}</span>
                      <br></br>
                      <span>{res.Date}</span>
                    </div>
                    <div style={{ paddingLeft: '12px' }}>
                      <Tag color="default">featured</Tag>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </Affix> */}
    </React.Fragment>
  );
};

export default RightSiteNewspage;
