import User from "../../../models/User";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async (_parent, args, context) => {
    let userInput = args.user;

    let userDB = await User.findOne({ username: userInput.username });
    if (!userDB) return null;

    console.log("UserDB:", userDB)

}