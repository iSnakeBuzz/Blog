import User from "../../../models/User";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_TOKEN = process.env.JWT;

export default async (_parent, args, context) => {
    let userInput = args.user;

    /* Getting user from the database. */
    let userDB = await User.findOne({ username: userInput.username });
    if (!userDB) return null;

    /* Comparing body password to the database */
    let validPassword = bcrypt.compareSync(userInput.password, userDB.password);
    if (!validPassword) return null;

    /* Generating jwt */
    let signedJWT = jwt.sign({
        id: userDB['_id'],
        username: userDB.username
    }, JWT_TOKEN, { expiresIn: '12h' });


    userDB.jwt = signedJWT;

    console.debug("Returning..", userDB, signedJWT)
    return userDB;
}