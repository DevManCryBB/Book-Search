import User from '../models/User'

const resolvers = {
    Query: {
        user: async () => {
            return User.find({})
        },
        
    }
}

module.exports = resolvers;