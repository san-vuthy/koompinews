const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const RootQuery = require('./publicquery');
const RootMutation = require('./publicmutation');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
