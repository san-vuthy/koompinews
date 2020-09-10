const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const CvType = new GraphQLObjectType({
  name: 'CvType',
  fields: () => ({
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    position: { type: GraphQLString },
    additional: { type: GraphQLString },
    createAt: { type: GraphQLString },
    file: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
module.exports = CvType;
