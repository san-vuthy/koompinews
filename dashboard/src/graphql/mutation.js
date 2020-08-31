import { gql } from '@apollo/client';

const ADD_NEWS = gql`
  mutation(
    $title: String!
    $describtion: String!
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
    $describtion: String!
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
    $des: String!
    $requireSkill: String!
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
    $des: String!
    $requireSkill: String!
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

export { ADD_NEWS, DELETE_NEWS, UPDATE_NEWS, ADD_JOBS, UPDATE_JOB };
