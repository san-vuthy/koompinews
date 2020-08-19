const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const jobsType = new GraphQLObjectType({
  name: 'Jobs',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    companyId: { type: GraphQLID },
    jobCategId: { type: GraphQLID },
    position: { type: GraphQLString },
    location: { type: GraphQLString },
    salary: { type: GraphQLString },
    worktime: { type: GraphQLString },
    des: { type: GraphQLString },
    requireSkill: { type: GraphQLString },
    image: { type: GraphQLString },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
    show: { type: GraphQLString },
  }),
});
module.exports = jobsType;
