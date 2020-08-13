const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const newsType = new GraphQLObjectType({
  name: 'News',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    describtion: { type: GraphQLString },
    categoriesId: { type: GraphQLID },
    newsTypeId: { type: GraphQLID },
    tag: { type: GraphQLString },
    userId: { type: GraphQLID },
    image: { type: GraphQLString },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
  }),
});
module.exports = newsType;
