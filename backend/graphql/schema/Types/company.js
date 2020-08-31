const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const companyType = new GraphQLObjectType({
  name: 'companyType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userId: { type: GraphQLID },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
    location: { type: GraphQLString },
    globalCompanySize: { type: GraphQLString },
    industry: { type: GraphQLString },
    des: { type: GraphQLString },
    image: { type: GraphQLString },
    website: { type: GraphQLString },
    type: { type: GraphQLString },
    revenue: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
  }),
});
module.exports = companyType;
