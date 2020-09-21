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
      id
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

const GET_NEWS_BY_RECENT = gql`
  query {
    allNewsbyType(id: "5f448a17900bec1a5e421225") {
      id
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
const GET_ALLJOBS = gql`
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
const GET_COMPANIES = gql`
  query($limit: Int!, $offset: Int!) {
    allCompany(limit: $limit, offset: $offset) {
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
  query($limit: Int!, $offset: Int!) {
    allEvent(limit: $limit, offset: $offset) {
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
  query($limit: Int!, $offset: Int!) {
    allAbout(limit: $limit, offset: $offset) {
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
      klb
      sf
      faq
      faqavatar
      klbavatar
      sfavatar
      user {
        name
      }
      createAt
      lastbase
      recentbase
      maintitle
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
const GET_JOB_BY_CATE = gql`
  query($limit: Int!, $offset: Int!, $id: String!) {
    allJobByCate(limit: $limit, offset: $offset, id: $id) {
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

export {
  GET_JOB_BY_CATE,
  GET_JOB_CATEGORY,
  GET_KNOWLEDGE,
  GET_NEWS,
  GET_NEWS_BY_MOSTPOPULAR,
  GET_JOBS,
  GET_A_JOB,
  GET_ANEWS,
  GET_ALLJOBS,
  GET_A_COMPANY,
  GET_COMPANIES,
  GET_A_EVENT,
  GET_EVENT,
  GET_ABOUT,
  GET_A_ABOUT,
  GET_NEWS_BY_RECENT,
};
