import { gql, ApolloServer } from 'apollo-server-micro';
import MongoDB from '../../database/MongoDB';
import { mutations, queries, schems } from '../../database/graphql/GraphQL';

/* Connecting to MongoDB */
MongoDB();

const resolvers = {
    Query: queries,
    Mutation: mutations
};

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs: schems,
    context: ({ req }) => {
        const authorization = req.headers.authorization || '';
        return { authorization };
    }
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler;