import jwt from 'jsonwebtoken';

const JWT_TOKEN = process.env.JWT;

export default async (parent, args, context) => {
    let auth = context.authorization;
    let token = auth.split('Bearer ')[1];

    let verified = jwt.verify(token, JWT_TOKEN);

    console.log("Verified:", verified)

    return {
        valid: true,
        jwt: token
    }
}