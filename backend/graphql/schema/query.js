const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// =====================Type=================

const userType = require('./Types/user');
const _ = require('lodash');

let users = [
  {
    name: 'den',
    email: 'sarimsovanden@gmail.com',
    password: '1234',
    id: '1',
  },
  {
    name: 'den',
    email: 'sarimsovanden@gmail.com',
    password: '1234',
    id: '2',
  },
  {
    name: 'den',
    email: 'sarimsovanden@gmail.com',
    password: '1234',
    id: '3',
  },
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = RootQuery;
