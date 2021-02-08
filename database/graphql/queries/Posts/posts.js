import Post from '../../../models/Post';

export default async (parent, args, context) => {
    let posts = await Post.find().populate('created_by').exec();

    console.log("Getting posts:", args, "posts:", posts);
    return posts;
}