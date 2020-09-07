import { gql } from '@apollo/client';

const GET_NEWS = gql`
  query {
    allNews {
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
  query {
    allJob {
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

export { GET_NEWS, GET_NEWS_BY_MOSTPOPULAR, GET_JOBS };
