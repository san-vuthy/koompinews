import { gql } from '@apollo/client';

const ADD_CV = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $position: String!
    $additional: String!
    $file: String!
  ) {
    addCv(
      firstname: $firstname
      lastname: $lastname
      email: $email
      position: $position
      additional: $additional
      file: $file
    ) {
      message
    }
  }
`;
export { ADD_CV };
