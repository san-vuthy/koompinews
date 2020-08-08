const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const RootQuery = require('./query');

module.exports = new GraphQLSchema({
  query: RootQuery,
});
