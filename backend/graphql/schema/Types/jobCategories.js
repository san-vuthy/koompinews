const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');
const Job = require('../../../model/Job');

const { GraphQLObjectType, GraphQLString } = graphql;

const jobcategoriesType = new GraphQLObjectType({
  name: 'JobCategories',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    userId: { type: GraphQLString },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
    show: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
    job: {
      type: JobType,
      resolve: (parent, args) => {
        return Job.find({ jobCategId: parent.id });
      },
    },
  }),
});
module.exports = jobcategoriesType;
const JobType = require('../Types/jobs');
