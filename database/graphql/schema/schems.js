import { gql } from 'apollo-server-micro';

let schems = gql`
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

export default schems;