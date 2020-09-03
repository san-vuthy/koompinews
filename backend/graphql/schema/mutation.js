const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const graphql = require('graphql');
const config = require('config');
const jwtSecret = config.get('JwtSecret');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = graphql;
const { GraphQLUpload } = require('graphql-upload');

// ===============Type Section===============
const UserType = require('../schema/Types/user');
const NewsType = require('../schema/Types/news');
const CategoriesType = require('../schema/Types/categories');
const Jobtype = require('../schema/Types/jobs');
const JobCatetoriesType = require('../schema/Types/jobCategories');
const TypeOfNewsType = require('../schema/Types/typeOfNews');
const CompanyType = require('../schema/Types/company');
const EventType = require('../schema/Types/event');
const AboutType = require('../schema/Types/about');

// ================Model Section ==================

const User = require('../../model/User');
const News = require('../../model/News');
const Categories = require('../../model/Categories');
const Job = require('../../model/Job');
const JobCategories = require('../../model/JobCategories');
const TypeOfNews = require('../../model/TypeOfNews');
const Company = require('../../model/Company');
const Event = require('../../model/Event');
const About = require('../../model/About');
const aboutType = require('../schema/Types/about');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    //========== Register ===========
    register: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const email = args.email.trim().toLowerCase();
          const isEmail = await User.findOne({ email });
          if (isEmail) {
            throw new Error('Email already Exist');
          }

          //bcrypt password in database
          const salt = await bcrypt.genSalt(12);
          const hashPassword = await bcrypt.hash(args.password, salt);
          let NewUser = new User({
            name: args.name,
            email: args.email,
            password: hashPassword,
          });
          await NewUser.save();
          return { message: 'Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========Login=============
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args, context) => {
        try {
          const user = await User.findOne({ email: args.email });
          if (!user) {
            throw new Error('Email do not Exist!');
          }
          const isMatch = await bcrypt.compare(args.password, user.password);
          if (!isMatch) {
            throw new Error('invalid credentail');
          } else {
            const token = jwt.sign(
              {
                email: user.email,
                name: user.name,
                id: user.id,
              },
              jwtSecret,
              {
                expiresIn: 36000,
              }
            );
            return {
              token,
              name: user.name,
              id: user.id,
              message: 'Login successful',
            };
          }
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //=================Add News==============

    addNews: {
      type: NewsType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        describtion: { type: new GraphQLNonNull(GraphQLString) },
        categoriesId: { type: new GraphQLNonNull(GraphQLString) },
        newsTypeId: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const news = new News({ ...args });
          await news.save();
          return { message: 'Create news Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //=============Update News ==============

    updateNews: {
      type: NewsType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        describtion: { type: new GraphQLNonNull(GraphQLString) },
        categoriesId: { type: new GraphQLNonNull(GraphQLString) },
        newsTypeId: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await News.updateOne({ _id: args.id }, { ...args });
          return { message: 'Update successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //===============Delete News==================
    deleteNews: {
      type: NewsType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await News.deleteOne({ _id: args.id }, { ...args });
          return { message: 'Delete Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //============Add Categories===============
    addCategories: {
      type: CategoriesType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          const categ = new Categories({ ...args });
          await categ.save();
          return { message: 'Create new Categories', show: categ.name };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //===========Delete Categories=================
    deleteCategoires: {
      type: CategoriesType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
    },

    //==========Update Categories=============
    updateCategoies: {
      type: CategoriesType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          await Categories.updateOne({ _id: args.id }, { ...args });
          return { message: ':Update Successfull', show: args.name };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //========Add TypeOfNews===========
    addTypeOfNews: {
      type: TypeOfNewsType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        try {
          const Typeofnews = new TypeOfNews({ ...args });
          await Typeofnews.save();
          return { message: 'Add Type of News Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //===========Update TypeofNews=======
    updateTypeOfNews: {
      type: TypeOfNewsType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await TypeOfNews.updateOne({ _id: args.id }, { ...args });
        return { message: 'Update Successful' };
      },
    },
    //=========Delete TypeofNews==========

    deleteTypeOfNews: {
      type: TypeOfNewsType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await TypeOfNews.deleteOne({ _id: args.id });
        return { message: 'Delete Successful' };
      },
    },

    //==========Add Jobs==============
    addJob: {
      type: Jobtype,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLString) },
        company: { type: new GraphQLNonNull(GraphQLString) },
        jobCategId: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        salary: { type: new GraphQLNonNull(GraphQLString) },
        worktime: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        requireSkill: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const job = new Job({ ...args });
          await job.save();
          return {
            message: 'Create new job',
            show: job.userId,
          };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //=======Update job==========
    updateJob: {
      type: Jobtype,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
        company: { type: new GraphQLNonNull(GraphQLString) },
        jobCategId: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        salary: { type: new GraphQLNonNull(GraphQLString) },
        worktime: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        requireSkill: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Job.updateOne({ _id: args.id }, { ...args });
          return { message: 'Update Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //=========Delete job=========
    deleteJob: {
      type: Jobtype,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Job.deleteOne({ _id: args.id });
          return { message: 'Deleted Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //=======Add Categories of job==========

    addJobCategory: {
      type: JobCatetoriesType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const isJobCateg = await JobCategories.findOne({ name: args.name });
          if (isJobCateg) {
            throw new Error('Name already Exist');
          }
          const jobCateg = new JobCategories({ ...args });
          await jobCateg.save();
          return {
            message: 'Create JobCategory Successful',
            name: jobCateg.name,
          };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //=======Update Categories of job============
    updateJobCategory: {
      type: JobCatetoriesType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await JobCategories.updateOne({ _id: args.id }, { ...args });
          return { message: 'Update Sucessful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //========Delete Categories of job===========
    deleteJobCategory: {
      type: JobCatetoriesType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await JobCategories.deleteOne({ _id: args.id });
        return { message: 'Delete Successful' };
      },
    },

    //========Add Company==========
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        globalCompanySize: { type: new GraphQLNonNull(GraphQLString) },
        industry: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
        website: { type: new GraphQLNonNull(GraphQLString) },
        revenue: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const IsCompany = await Company.findOne({ name: args.name });
          if (IsCompany) {
            throw new Error('This Company was added');
          }
          const company = new Company({ ...args });
          await company.save();
          return { message: 'Add Company Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },

    //==========Update Company===========
    updateCompany: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        globalCompanySize: { type: new GraphQLNonNull(GraphQLString) },
        industry: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
        website: { type: new GraphQLNonNull(GraphQLString) },
        revenue: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const IsCompany = await Company.findOne({ name: args.name });
          if (IsCompany) {
            throw new Error('This Company was added');
          }
          await Company.updateOne({ _id: args.id }, { ...args });
          return { message: 'Update Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==========Delete Company============
    deleteCompany: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Company.deleteOne({ _id: args.id });
        return { message: 'Delete Successful' };
      },
    },

    //=========Add Event================
    addEvent: {
      type: EventType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const event = new Event({ ...args });
          await event.save();
          return { message: 'Create Event Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========Update Event==============
    updateEvent: {
      type: EventType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Event.updateOne({ _id: args.id }, { ...args });
          return { message: 'Update Event Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //===========Delete Event=================
    deleteEvent: {
      type: EventType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Event.deleteOne({ _id: args.id });
          return { message: 'Delete Event Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==============Add About============
    addAbout: {
      type: aboutType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        avarta: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const about = new About({ ...args });
          await about.save();
          return { message: 'Add about Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //==============Update About===========
    updateAbout: {
      type: aboutType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        des: { type: new GraphQLNonNull(GraphQLString) },
        avarta: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await About.updateOne({ _id: args.id }, { ...args });
          return { message: 'Update Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    //============Delete About============
    deleteAbout: {
      type: aboutType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await About.deleteOne({ _id: args.id });
          return { message: 'delete Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  },
});

module.exports = RootMutation;
