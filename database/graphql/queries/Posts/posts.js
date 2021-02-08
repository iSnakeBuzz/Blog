import Post from '../../../models/Post';

export default async (parent, args, context) => {
    let limit = 9;
    let skip = limit * args.page;

    let posts = await Post.find().limit(limit).skip(skip).populate('created_by').exec();

    console.log("Getting posts:", args, "posts:", posts);
    return posts;
}