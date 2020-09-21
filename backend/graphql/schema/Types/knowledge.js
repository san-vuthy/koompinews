const graphql = require('graphql');
const UserType = require('../Types/user');
const User = require('../../../model/User');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const knowledgeType = new GraphQLObjectType({
  name: 'Knowledge',
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLString },
    klbavatar: { type: GraphQLString },
    sfavatar: { type: GraphQLString },
    faqavatar: { type: GraphQLString },
    maintitle: { type: GraphQLString },
    klb: { type: GraphQLString },
    sf: { type: GraphQLString },
    faq: { type: GraphQLString },
    lastbase: { type: GraphQLString },
    recentbase: { type: GraphQLString },
    createAt: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.userId);
      },
    },
  }),
});

module.exports = knowledgeType;
