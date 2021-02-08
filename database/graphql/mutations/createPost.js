import jwt from 'jsonwebtoken';
import Post from '../../models/Post';

const JWT_TOKEN = process.env.JWT;

export default async (_parent, args, context) => {
    let postInput = args.post;
    let auth = context.authorization;
    let token = auth.split('Bearer ')[1];
    /* Verifying the authorization token. If valid, continue, otherwise it throws an error.*/
    let jwt_data = jwt.verify(token, JWT_TOKEN);

    let now = new Date();

    let toDb = {
        ...postInput,
        created_by: jwt_data.id,
        created_at: now,
        updated_at: now
    }

    let post = new Post(toDb);
    await post.save();

    return post;
}