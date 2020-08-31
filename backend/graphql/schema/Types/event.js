const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const eventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    message: { type: GraphQLString },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    des: { type: GraphQLString },
    banner: { type: GraphQLString },
    createAt: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
  }),
});
module.exports = eventType;
