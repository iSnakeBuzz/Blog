import Post from "../../../models/Post";

export default async (_parent, args, _) => {
    let post = await Post.findOne({ uri: args.uri }).populate({
        path: 'created_by',
        populate: [{
            path: 'posts'
        }],
    });
    return post;
}