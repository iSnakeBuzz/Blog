import User from '../../models/User';

export default async (parent, args, context) => {
    let user = await User.findOne({ username: args.username }).populate('posts').exec();

    console.log("Getting user:", args, "user:", user);
    return user;
}