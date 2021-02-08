import User from '../../models/User';
import bcrypt from 'bcryptjs';

const BCRYPT_SALT = bcrypt.genSaltSync(8);

export default async (parent, args, context) => {
    let userInput = args.user;
    let date = new Date();

    let password = userInput.password;

    var hashedPassword = bcrypt.hashSync(password, salt);

    let userToAdd = {
        ...userInput,
        password: hashedPassword,
        created_at: date,
        updated_at: date
    }

    let user = new User(userToAdd);
    await user.save();

    console.log("Creating user:", args, "user:", user);

    return user;
};