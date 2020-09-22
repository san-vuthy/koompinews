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
const Knowledge = require('../../model/Knowledge');
const Cv = require('../../model/Cv');
const Banner = require('../../model/Banner');
const Page = require('../../model/Allpage');

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
const KnowledgeType = require('./Types/knowledge');
const CvType = require('./Types/cv');
const BannerType = require('./Types/banner');
const PageType = require('./Types/allpage');
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
      resolve(parent, args, { limit = null, offset = null }) {
        return News.find({}).limit(limit).skip(offset).sort({ createAt: -1 });
      },
    },

    //=========Get News by TypeofNews========
    allNewsbyType: {
      type: new GraphQLList(NewsType),
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return News.find({ newsTypeId: args.id });
      },
    },

    //======Get all Categories=========
    allCategories: {
      type: new GraphQLList(CategoriesType),
      resolve(parent, args) {
        return Categories.find().sort({ createAt: -1 });
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
        return Job.find().sort({ createAt: -1 });
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
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return JobCategories.findOne({ _id: args.id });
      },
    },
    //=====Get all JobCategories=========
    allJobCategories: {
      type: new GraphQLList(JobCategoriesType),
      resolve(parent, args) {
        return JobCategories.find().sort({ createAt: -1 });
      },
    },

    //=====Get all TypeofNews===========
    allTypeOfNews: {
      type: new GraphQLList(TypeOfNewType),
      resolve(parent, args) {
        return TypeOfNews.find().sort({ createAt: -1 });
      },
    },
    //=========Get a TypeofNews===========
    aTypeofNews: {
      type: TypeOfNewType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return TypeOfNews.findOne({ _id: args.id });
      },
    },
    //=======Get all Company=======
    allCompany: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Company.find().sort({ createAt: -1 });
      },
    },
    //========Get a Company======
    aCompany: {
      type: CompanyType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Company.findOne({ _id: args.id });
      },
    },
    //==========Get a Event=======
    aEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Event.findOne({ _id: args.id });
      },
    },
    //========Get all Event===========
    allEvent: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Event.find().sort({ createAt: -1 });
      },
    },
    //========Get all About==============
    allAbout: {
      type: new GraphQLList(AboutType),
      resolve(parent, args) {
        return About.find().sort({ createAt: -1 });
      },
    },
    //========Get a About==========
    aAbout: {
      type: AboutType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return About.findOne({ _id: args.id });
      },
    },
    //===========Get a Knowledge============
    aKnowledge: {
      type: KnowledgeType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Knowledge.findOne({ _id: args.id });
      },
    },
    //============Get all Knowledge========
    allKnowledge: {
      type: new GraphQLList(KnowledgeType),
      resolve(parent, args) {
        return Knowledge.find().sort({ createAt: -1 });
      },
    },
    //==========Get all CV===============
    allCv: {
      type: new GraphQLList(CvType),
      resolve(parent, args) {
        return Cv.find({}).sort({ createAt: -1 });
      },
    },
    //=========Get a CV============
    aCv: {
      type: CvType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Cv.findOne({ _id: args.id });
      },
    },
    allBanner: {
      type: new GraphQLList(BannerType),
      resolve(parent, args) {
        return Banner.find().sort({ createAt: -1 });
      },
    },
    aBanner: {
      type: BannerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Banner.findOne({ _id: args.id });
      },
    },
    aPage: {
      type: PageType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Page.findOne({ _id: args.id });
      },
    },
    allPage: {
      type: new GraphQLList(PageType),
      resolve: (parent, args) => {
        return Page.find().sort({ createAt: -1 });
      },
    },
  },
});

module.exports = RootQuery;
