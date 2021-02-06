import { gql, ApolloServer } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
    Query: {
        sayHello(parent, args, context) {
            return 'Hello World!';
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler;