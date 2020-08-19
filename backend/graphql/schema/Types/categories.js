const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const categoriesType = new GraphQLObjectType({
  name: 'Categories',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userId: { type: GraphQLID },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
    show: { type: GraphQLString },
  }),
});
module.exports = categoriesType;
