import { gql } from '@apollo/client';

const ADD_NEWS = gql`
  mutation(
    $title: String!
    $describtion: String
    $categoriesId: String!
    $newsTypeId: String!
    $userId: String!
    $image: String!
  ) {
    addNews(
      title: $title
      describtion: $describtion
      categoriesId: $categoriesId
      newsTypeId: $newsTypeId
      userId: $userId
      image: $image
    ) {
      message
    }
  }
`;

const DELETE_NEWS = gql`
  mutation($id: String!) {
    deleteNews(id: $id) {
      message
    }
  }
`;

const UPDATE_NEWS = gql`
  mutation(
    $id: String!
    $title: String!
    $describtion: String
    $categoriesId: String!
    $newsTypeId: String!
    $userId: String!
    $image: String!
  ) {
    updateNews(
      id: $id
      title: $title
      describtion: $describtion
      categoriesId: $categoriesId
      newsTypeId: $newsTypeId
      userId: $userId
      image: $image
    ) {
      message
    }
  }
`;

const ADD_JOBS = gql`
  mutation(
    $company: String!
    $jobCategId: String!
    $position: String!
    $location: String!
    $salary: String!
    $worktime: String!
    $des: String
    $requireSkill: String
    $image: String!
    $userId: String!
  ) {
    addJob(
      company: $company
      jobCategId: $jobCategId
      position: $position
      location: $location
      salary: $salary
      worktime: $worktime
      des: $des
      requireSkill: $requireSkill
      image: $image
      userId: $userId
    ) {
      message
    }
  }
`;

const UPDATE_JOB = gql`
  mutation(
    $id: String!
    $company: String!
    $jobCategId: String!
    $position: String!
    $location: String!
    $salary: String!
    $worktime: String!
    $des: String
    $requireSkill: String
    $image: String!
    $userId: String!
  ) {
    updateJob(
      id: $id
      company: $company
      jobCategId: $jobCategId
      position: $position
      location: $location
      salary: $salary
      worktime: $worktime
      des: $des
      requireSkill: $requireSkill
      image: $image
      userId: $userId
    ) {
      message
    }
  }
`;

const DELETE_JOB = gql`
  mutation($id: String!) {
    deleteJob(id: $id) {
      message
    }
  }
`;

const ADD_JOB_CATEGORY = gql`
  mutation($userId: String!, $name: String!) {
    addJobCategory(userId: $userId, name: $name) {
      message
    }
  }
`;
const DELETE_JOB_CATEGORY = gql`
  mutation($id: String!) {
    deleteJobCategory(id: $id) {
      message
    }
  }
`;
const UPDATE_JOB_CATEGORY = gql`
  mutation($id: String!, $name: String!, $userId: String!) {
    updateJobCategory(id: $id, name: $name, userId: $userId) {
      message
    }
  }
`;

const DELETE_COMPANY = gql`
  mutation($id: String!) {
    deleteCompany(id: $id) {
      message
    }
  }
`;

const UPDATE_COMPANY = gql`
  mutation(
    $id: String!
    $name: String!
    $location: String!
    $globalCompanySize: String!
    $email: String!
    $des: String
    $image: String!
    $userId: String!
    $website: String!
    $address: String!
    $type: String!
  ) {
    updateCompany(
      id: $id
      name: $name
      location: $location
      globalCompanySize: $globalCompanySize
      email: $email
      des: $des
      image: $image
      userId: $userId
      website: $website
      address: $address
      type: $type
    ) {
      message
    }
  }
`;
const ADD_COMPANY = gql`
  mutation(
    $name: String!
    $location: String!
    $globalCompanySize: String!
    $email: String!
    $des: String
    $image: String!
    $userId: String!
    $website: String!
    $address: String!
    $type: String!
  ) {
    addCompany(
      name: $name
      location: $location
      globalCompanySize: $globalCompanySize
      email: $email
      des: $des
      image: $image
      userId: $userId
      website: $website
      address: $address
      type: $type
    ) {
      message
    }
  }
`;

const ADD_EVENT = gql`
  mutation($title: String!, $image: String!, $des: String!, $userId: String!) {
    addEvent(title: $title, image: $image, des: $des, userId: $userId) {
      message
    }
  }
`;
const UPDATE_EVENT = gql`
  mutation(
    $id: String!
    $title: String!
    $image: String!
    $des: String!
    $userId: String!
  ) {
    updateEvent(
      id: $id
      title: $title
      image: $image
      des: $des
      userId: $userId
    ) {
      message
    }
  }
`;
const DELETE_EVENT = gql`
  mutation($id: String!) {
    deleteEvent(id: $id) {
      message
    }
  }
`;

const ADD_ABOUT = gql`
  mutation($title: String!, $avarta: String!, $des: String, $userId: String!) {
    addAbout(title: $title, avarta: $avarta, des: $des, userId: $userId) {
      message
    }
  }
`;
const UPDATE_ABOUT = gql`
  mutation(
    $id: String!
    $title: String!
    $avarta: String!
    $des: String
    $userId: String!
  ) {
    updateAbout(
      id: $id
      title: $title
      avarta: $avarta
      des: $des
      userId: $userId
    ) {
      message
    }
  }
`;
const DELETE_ABOUT = gql`
  mutation($id: String!) {
    deleteAbout(id: $id) {
      message
    }
  }
`;

const ADD_KNOWLEDGE = gql`
  mutation(
    $faq: String!
    $klb: String!
    $sf: String!
    $userId: String!
    $faqavatar: String!
    $klbavatar: String!
    $sfavatar: String!
    $maintitle: String
    $lastbase: String
    $recentbase: String
  ) {
    addKnowledge(
      userId: $userId
      klb: $klb
      sf: $sf
      faq: $faq
      faqavatar: $faqavatar
      klbavatar: $klbavatar
      sfavatar: $sfavatar
      maintitle: $maintitle
      lastbase: $lastbase
      recentbase: $recentbase
    ) {
      message
    }
  }
`;
const UPDATE_KNOWLEDGE = gql`
  mutation(
    $id: String!
    $title: String!
    $userId: String!
    $des: String!
    $avarta: String!
    $maintitle: String
    $lastbase: String
    $recentbase: String
  ) {
    updateKnowledge(
      id: $id
      title: $title
      userId: $userId
      des: $des
      avarta: $avarta
      maintitle: $maintitle
      lastbase: $lastbase
      recentbase: $recentbase
    ) {
      message
    }
  }
`;
const DELETE_KNOWLEDGE = gql`
  mutation($id: String!) {
    deleteKnowledge(id: $id) {
      message
    }
  }
`;
const DELETE_CV = gql`
  mutation($id: String!) {
    deleteCV(id: $id) {
      message
    }
  }
`;

export {
  DELETE_CV,
  ADD_NEWS,
  DELETE_NEWS,
  UPDATE_NEWS,
  ADD_JOBS,
  UPDATE_JOB,
  DELETE_JOB,
  ADD_JOB_CATEGORY,
  DELETE_JOB_CATEGORY,
  UPDATE_JOB_CATEGORY,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  ADD_COMPANY,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  ADD_ABOUT,
  DELETE_ABOUT,
  UPDATE_ABOUT,
  ADD_KNOWLEDGE,
  UPDATE_KNOWLEDGE,
  DELETE_KNOWLEDGE,
};
