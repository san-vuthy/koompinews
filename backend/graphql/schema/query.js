const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const User = require('../../model/User');
const News = require('../../model/News');
const Categories = require('../../model/Categories');
const JobCategories = require('../../model/JobCategories');
const TypeOfNews = require('../../model/TypeOfNews');
const Company = require('../../model/Company');
const Event = require('../../model/Event');
const About = require('../../model/About');
const Job = require('../../model/Job');

// =====================Type=================
const UserType = require('./Types/user');
const NewsType = require('./Types/news');
const CategoriesType = require('./Types/categories');
const JobCategoriesType = require('./Types/jobCategories');
const TypeOfNewType = require('./Types/typeOfNews');
const CompanyType = require('./Types/company');
const EventType = require('./Types/event');
const AboutType = require('./Types/about');
const JobType = require('./Types/jobs');
const _ = require('lodash');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //======Get User==========
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findOne({ _id: args.id });
      },
    },
    //======Get All User ======
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },

    //==========Get a News==========
    aNews: {
      type: NewsType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return News.findOne({ _id: args.id });
      },
    },
    //=========Get all News=========
    allNews: {
      type: new GraphQLList(NewsType),
      resolve(parent, args) {
        return News.find();
      },
    },
    //======Get all Categories=========
    allCategories: {
      type: new GraphQLList(CategoriesType),
      resolve(parent, args) {
        return Categories.find();
      },
    },

    //=======Get a Categories=========
    aCategory: {
      type: CategoriesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Categories.findOne({ _id: args.id });
      },
    },

    //==========Get allJob=======
    allJob: {
      type: new GraphQLList(JobType),
      resolve(parent, args) {
        return Job.find();
      },
    },
    //========Get a Job=========
    aJob: {
      type: JobType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Job.findOne({ _id: args.id });
      },
    },

    //=====Get a JobCategory=========
    aJobCategory: {
      type: JobCategoriesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return JobCategories.findOne({ _id: args.id });
      },
    },
    //=====Get all JobCategories=========
    allJobCategories: {
      type: new GraphQLList(JobCategoriesType),
      resolve(parent, args) {
        return JobCategories.find();
      },
    },

    //=====Get all TypeofNews===========
    allTypeOfNews: {
      type: new GraphQLList(TypeOfNewType),
      resolve(parent, args) {
        return TypeOfNews.find();
      },
    },
    //=========Get a TypeofNews===========
    aTypeofNews: {
      type: TypeOfNewType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return TypeOfNews.findOne({ _id: args.id });
      },
    },
    //=======Get all Company=======
    allCompany: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Company.find();
      },
    },
    //========Get a Company======
    aComapny: {
      type: CompanyType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Company.findOne({ _id: args.id });
      },
    },
    //==========Get a Event=======
    aEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Event.findOne({ _id: args.id });
      },
    },
    //========Get all Event===========
    allEvent: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Event.find();
      },
    },
    //========Get all About==============
    allAbout: {
      type: new GraphQLList(AboutType),
      resolve(parent, args) {
        return About.find();
      },
    },
    //========Get a About==========
    aAbout: {
      type: AboutType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return About.findOne({ _id: args.id });
      },
    },
  },
});

module.exports = RootQuery;
