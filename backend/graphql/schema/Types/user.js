const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    message: { type: GraphQLString },
    token: { type: GraphQLString },
    createAt: { type: GraphQLString },
  }),
});
module.exports = userType;
