const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');
const AllPageType = require('../Types/allpage');
const AllPage = require('../../../model/Allpage');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const bannerType = new GraphQLObjectType({
  name: 'banner',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    banner: { type: GraphQLString },
    page: { type: GraphQLString },
    createAt: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
    page: {
      type: AllPageType,
      resolve: (parent, args) => {
        return AllPage.findById(parent.page);
      },
    },
  }),
});
module.exports = bannerType;
