const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const allpageType = new GraphQLObjectType({
  name: 'allpage',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    createAt: { type: GraphQLString },
    namePage: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
  }),
});
module.exports = allpageType;
