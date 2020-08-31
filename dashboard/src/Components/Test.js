import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_NEWS = gql`
  query {
    allNews {
      title
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return 'Loading...';
  console.log(data);
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h1>hello</h1>
      {data.allNews.map((res) => {
        return <h1>{res.title}</h1>;
      })}
    </div>
  );
};

export default Test;
