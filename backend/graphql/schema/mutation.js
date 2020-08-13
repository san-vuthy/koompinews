const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const graphql = require('graphql');
const config = require('config');
const jwtSecret = config.get('JwtSecret');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;

// ===============Type Section===============
const UserType = require('../schema/Types/user');
const NewsType = require('../schema/Types/news');

// ================Model Section ==================

const User = require('../../model/User');
const News = require('../../model/News');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    //========== Register ===========
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const isEmail = await User.findOne({ email: args.email });
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
          return NewUser.save();
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
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
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
        title: { type: GraphQLNonNull(GraphQLString) },
        describtion: { type: GraphQLNonNull(GraphQLString) },
        categoriesId: { type: GraphQLNonNull(GraphQLID) },
        newsTypeId: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLNonNull(GraphQLID) },
        tag: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const news = new News({ ...args });
          await news.save();
          return { message: 'Create new news Successful' };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  },
});

module.exports = RootMutation;
