import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_RECENT } from '../graphql/query';
import { Row, Col, Spin, Layout } from 'antd';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { ConfigContext } from 'antd/lib/config-provider';

const { Content } = Layout;
const RecentPopularStories = () => {
  const [popular, setPopular] = useState([
    {
      img: '/img/news.png',
      title: 'Sequoia secures $1.4b for two new fundsin India, Southeast Asia',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero',
      avatar: '/img/Den.png',
      date: '7/29/2020',
    },
    {
      img: '/img/news.png',
      title: 'Sequoia secures $1.4b for two new fundsin India, Southeast Asia',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero',
      avatar: '/img/Den.png',
      date: '7/29/2020',
    },
    {
      img: '/img/news.png',
      title: 'Sequoia secures $1.4b for two new fundsin India, Southeast Asia',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero',
      avatar: '/img/Den.png',
      date: '7/29/2020',
    },
    {
      img: '/img/news.png',
      title: 'Sequoia secures $1.4b for two new fundsin India, Southeast Asia',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero',
      avatar: '/img/Den.png',
      date: '7/29/2020',
    },
  ]);
  const { loading, error, data, refetch } = useQuery(GET_NEWS_BY_RECENT);

  if (loading)
    return (
      <Content style={{ marginTop: '15px' }}>
        <center>
          <Spin tip="Loading..."></Spin>
        </center>
      </Content>
    );
  console.log(data);
  // if (error) return `Error! ${error.message}
  return (
    <React.Fragment>
      <div className="container-popular-news">
        <center className="popular-main-title">
          <h1>Recent Popular Stories</h1>
        </center>
        <div style={{ marginTop: '45px' }}>
          {data.allNewsbyType.map((res, index) => {
            return (
              <Link to={`/news/${res.id}`}>
                <div className="popular">
                  <div>
                    <img
                      className="image-popular"
                      src={'http://localhost:8080/' + res.image}
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <h1 className="popular-title">{res.title}</h1>
                    <p className="popular-text">
                      {parse(res.describtion.substring(0, 200) + '....')}
                    </p>
                    <div className="popular-user-date">
                      <img className="avatar-popular" src={res.avatar} />
                      <span style={{ paddingLeft: '15px' }}>{res.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentPopularStories;
