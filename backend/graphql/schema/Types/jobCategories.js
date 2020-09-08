const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');
// const Job = require('../../../model/Job');
// const JobType = require('../Types/jobs');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const jobcategoriesType = new GraphQLObjectType({
  name: 'JobCategories',
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
    // JobName: {
    //   type: JobType,
    //   resolve: (parent, args) => {
    //     return Job.findById(parent.id);
    //   },
    // },
  }),
});
module.exports = jobcategoriesType;
