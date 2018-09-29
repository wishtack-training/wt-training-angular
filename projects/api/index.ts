import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express';
import * as express from 'express';
import { buildSchemaFromTypeDefinitions, mergeSchemas } from 'graphql-tools';
import { userSchema } from './user/user-schema';

const nowTypeDefs = gql`
    type Query {
        now: String
    }
`;

const nowResolvers = {
    Query: {
        now() {
            return new Date().toISOString();
        }
    }
};

const schema = mergeSchemas({
    schemas: [
        makeExecutableSchema({typeDefs: nowTypeDefs, resolvers: nowResolvers}),
        userSchema
    ]
});


const server = new ApolloServer({
    schema
});

const app = express();
server.applyMiddleware({app});

app.listen({port: 4000}, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
