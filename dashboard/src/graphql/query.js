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
      createAt
      user {
        name
      }
    }
  }
`;
const GET_A_JOB_CATEGORY = gql`
  query($id: String) {
    aJobCategory(id: $id) {
      name
      userId
      createAt
      user {
        name
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
const GET_COMPANIES = gql`
  query {
    allCompany {
      name
      id
      user {
        name
        id
      }
      createAt
      location
      globalCompanySize
      email
      des
      image
      website
      type
      address
    }
  }
`;
const GET_A_COMPANY = gql`
  query($id: String!) {
    aCompany(id: $id) {
      name
      id
      user {
        name
        id
      }
      createAt
      location
      globalCompanySize
      email
      des
      image
      website
      type
      address
    }
  }
`;
const GET_EVENT = gql`
  query {
    allEvent {
      id
      title
      image
      createAt
      des
      message
      user {
        name
      }
    }
  }
`;
const GET_A_EVENT = gql`
  query($id: String!) {
    aEvent(id: $id) {
      id
      title
      image
      createAt
      des
      message
      user {
        name
      }
    }
  }
`;
const GET_ABOUT = gql`
  query {
    allAbout {
      id
      title
      des
      user {
        name
      }
      avarta
      createAt
    }
  }
`;
const GET_A_ABOUT = gql`
  query($id: String!) {
    aAbout(id: $id) {
      id
      title
      des
      user {
        name
      }
      avarta
      createAt
    }
  }
`;
const GET_KNOWLEDGE = gql`
  query {
    allKnowledge {
      id
      title
      des
      user {
        name
      }
      avarta
      createAt
      lastbase
      recentbase
      maintitle
    }
  }
`;

const GET_A_KNOWLEDGE = gql`
  query($id: String!) {
    aKnowledge(id: $id) {
      id
      title
      des
      user {
        name
      }
      avarta
      createAt
      lastbase
      recentbase
      maintitle
    }
  }
`;

const GET_ALL_CV = gql`
  query {
    allCv {
      id
      firstname
      lastname
      additional
      email
      position
      file
      createAt
    }
  }
`;
const GET_A_CV = gql`
  query($id: String!) {
    aCv(id: $id) {
      id
      firstname
      lastname
      additional
      email
      position
      file
      createAt
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
  GET_COMPANIES,
  GET_A_COMPANY,
  GET_A_EVENT,
  GET_EVENT,
  GET_ABOUT,
  GET_A_ABOUT,
  GET_A_KNOWLEDGE,
  GET_KNOWLEDGE,
  GET_ALL_CV,
  GET_A_CV,
};
