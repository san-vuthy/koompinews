import React from 'react';
import parse from 'html-react-parser';
import moment from 'moment';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import Footer from '../Layouts/Footer';
import { Card, Tag, Layout, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ANEWS } from '../../graphql/query';

const { Content } = Layout;
const NewsAticle = (props) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ANEWS, {
    variables: { id },
  });
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
  // console.log(props.match.params.id);
  // const newss = NewsData.news.find((x) => x._id == props.match.params.id);
  // console.log(news.date)
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <SubNavbar />
        <div className="container-news-article " style={{ marginTop: '60px' }}>
          <Card
            cover={
              <img
                alt="example"
                src={'http://localhost:8080/' + data.aNews.image}
              />
            }
          >
            <Tag className="tag-time-news-article" color="processing">
              {moment.unix(data.aNews.createAt / 1000).format('YYYY-MM-DD')}
            </Tag>
            <h1 className="title-news-article">{data.aNews.title}</h1>
            <span s className="des-news-article">
              {parse(data.aNews.describtion)}
            </span>
          </Card>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NewsAticle;
