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
const GET_CATEGORIES = gql`
  query {
    allCategories {
      id
      name
    }
  }
`;
const GET_TYPE_OF_NEWS = gql`
  query {
    allTypeOfNews {
      id
      name
    }
  }
`;

const GET_USERS = gql`
  query {
    users {
      name
      id
    }
  }
`;

const GET_ANEWS = gql`
  query($id: String!) {
    aNews(id: $id) {
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

const GET_JOB_CATEGORY = gql`
  query {
    allJobCategories {
      name
      id
      userId
    }
  }
`;
const GET_A_JOB_CATEGORY = gql`
  query($id: String) {
    aJobCategory(id: $id) {
      name
      id
      userId
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

export {
  GET_NEWS,
  GET_CATEGORIES,
  GET_TYPE_OF_NEWS,
  GET_USERS,
  GET_ANEWS,
  GET_JOBS,
  GET_JOB_CATEGORY,
  GET_A_JOB_CATEGORY,
  GET_A_JOB,
};
