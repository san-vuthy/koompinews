const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');
const News = require('../../../model/News');
const NewsType = require('../Types/news');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const typeOfNews = new GraphQLObjectType({
  name: 'TypeOfNews',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userId: { type: GraphQLID },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
    show: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
  }),
});
module.exports = typeOfNews;
