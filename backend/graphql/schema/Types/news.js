const graphql = require('graphql');
const UserType = require('../Types/user');
const CategoriesType = require('../Types/categories');
const Category = require('../../../model/Categories');
const typeOfNewsType = require('../Types/typeOfNews');
const typeOfNews = require('../../../model/TypeOfNews');
const User = require('../../../model/User');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

const newsType = new GraphQLObjectType({
  name: 'News',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    describtion: { type: GraphQLString },
    categoriesId: { type: GraphQLString },
    newsTypeId: { type: GraphQLString },
    userId: { type: GraphQLString },
    image: { type: GraphQLString },
    message: { type: GraphQLString },
    createAt: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
    categoreyname: {
      type: CategoriesType,
      resolve: (parent, args) => {
        return Category.findById(parent.categoriesId);
      },
    },
    type: {
      type: typeOfNewsType,
      resolve: (parent, args) => {
        return typeOfNews.findById(parent.newsTypeId);
      },
    },
  }),
});
module.exports = newsType;
