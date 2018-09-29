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
        users: [User]
    }

    type User {
        firstName: String,
        lastName: String,
        email: String
    }

`;

export const userSchema = makeExecutableSchema({
    typeDefs: userTypeDefs,
    resolvers: userResolvers
});
