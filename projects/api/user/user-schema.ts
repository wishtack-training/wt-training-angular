/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { gql, makeExecutableSchema } from 'apollo-server-express';
import { userResolvers } from './user-resolvers';

export const userTypeDefs = gql`
    
    type Query {
        user(userId: ID): User
        users: [User]
    }
    
    type Mutation {
        addUser(user: UserInput): User
        removeUser(userId: ID): ID
    }
    
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }
    
    input UserInput {
        firstName: String
        lastName: String
        email: String
    }
`;

export const userSchema = makeExecutableSchema({
    typeDefs: userTypeDefs,
    resolvers: userResolvers
});
