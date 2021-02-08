import { gql, ApolloServer } from 'apollo-server-micro';
import MongoDB from '../../database/MongoDB';
import Post from '../../database/models/Post';
import User from '../../database/models/User';

/* Connecting to MongoDB */
MongoDB();

const typeDefs = gql`
    type User {
        _id: String!
        username: String!
        posts: [Post!]!
        jwt: String
        created_at: String!
        updated_at: String!
    }

    type Post {
        _id: String!
        title: String!
        description: String!
        content: String!
        uri: String!
        tags: [String!]!
        views: Float
        created_by: User!
        created_at: String!
        updated_at: String!
    }

    type Query {
        posts: [Post!]!
        user(username: String): User
    }

    input UserInput {
        username: String!
        password: String!
    }

    input PostInput {
        title: String!
        description: String!
        content: String!
        uri: String!
        tags: [String!]!
    }

    type Mutation {
        createUser(user: UserInput): User
        createPost(post: PostInput): Post
    }
`;

const resolvers = {
    Query: {
        async posts(parent, args, context) {
            let posts = await Post.find().populate('created_by').exec();

            console.log("Getting posts:", args, "posts:", posts);
            return posts;
        },
        async user(parent, args, context) {
            let user = await User.findOne({ username: args.username }).populate('posts').exec();
            console.log("Getting user:", args, "user:", user);
            return user;
        }
    },
    Mutation: {
        async createUser(parent, args, context) {
            let date = new Date();
            let userToAdd = {
                ...args.user,
                created_at: date,
                updated_at: date
            }

            let user = new User(userToAdd);
            await user.save();

            console.log("Creating user:", args, "user:", user);

            return user;
        }
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler;