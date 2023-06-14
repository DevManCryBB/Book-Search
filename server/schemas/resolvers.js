import User from '../models/User'

module.exports = resolvers;

const resolvers = {
    Query: {
      me: async () => {
        return User.find({})
    },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },

      addUser: async (parent,{ username, email, password }, context) => {

      },
      saveBook: async (parent, { bookData }, context) => {
        
      },
      removeBook: async (parent, { bookId }, context) => {
       
      },
    },
  };
  
  module.exports = resolvers;
  