import User from '../../models/User';

export default async (parent, args, context) => {
    let userInput = args.user;
    let date = new Date();

    let password =;

    let userToAdd = {
        created_at: date,
        updated_at: date
    }

    let user = new User(userToAdd);
    await user.save();

    console.log("Creating user:", args, "user:", user);

    return user;
};