import { gql } from '@apollo/client';

const GET_NEWS = gql`
  query($limit: Int!, $offset: Int!) {
    allNews(limit: $limit, offset: $offset) {
      image
      title
      describtion
      id
      createAt
      user {
        name
      }
      categoreyname {
        name
      }
      type {
        name
      }
    }
  }
`;
const GET_NEWS_BY_MOSTPOPULAR = gql`
  query {
    allNewsbyType(id: "5f447e5b900bec1a5e421224") {
      title
      image
      describtion
      user {
        name
      }
      categoreyname {
        name
        id
      }
      type {
        name
        id
      }
    }
  }
`;

const GET_JOBS = gql`
  query($limit: Int!, $offset: Int!) {
    allJob(limit: $limit, offset: $offset) {
      id
      position
      jobCategId
      jobCateName {
        name
      }
      company
      user {
        name
      }
      location
      salary
      worktime
      des
      requireSkill
      image
      message
      createAt
      show
      message
    }
  }
`;
const GET_ANEWS = gql`
  query($id: String!) {
    aNews(id: $id) {
      title
      image
      describtion
      createAt
      user {
        name
      }
      categoreyname {
        name
        id
      }
      type {
        name
        id
      }
    }
  }
`;
const GET_A_JOB = gql`
  query($id: String) {
    aJob(id: $id) {
      position
      jobCategId
      jobCateName {
        name
        id
      }
      company
      user {
        name
        id
      }
      location
      salary
      worktime
      des
      requireSkill
      image
      message
      createAt
      show
      message
    }
  }
`;

export { GET_NEWS, GET_NEWS_BY_MOSTPOPULAR, GET_JOBS, GET_A_JOB, GET_ANEWS };
