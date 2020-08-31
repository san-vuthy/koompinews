const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');
const JobCategoryType = require('../Types/jobCategories');
const JobCategory = require('../../../model/JobCategories');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const jobsType = new GraphQLObjectType({
  name: 'Jobs',
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLString },
    company: { type: GraphQLString },
    jobCategId: { type: GraphQLString },
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
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
    jobCateName: {
      type: JobCategoryType,
      resolve: (parent, args) => {
        return JobCategory.findById(parent.jobCategId);
      },
    },
  }),
});
module.exports = jobsType;
