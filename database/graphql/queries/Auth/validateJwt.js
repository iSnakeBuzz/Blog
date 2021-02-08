import jwt from 'jsonwebtoken';

const JWT_TOKEN = process.env.JWT;

export default async (parent, args, context) => {
    let auth = context.authorization;
    console.log('validateJwt', auth)

    let verified = jwt.verify(auth, JWT_TOKEN);

    console.log("Verified:", verified)

    return {
        valid: verified,
        jwt: "hlolasd"
    }
}