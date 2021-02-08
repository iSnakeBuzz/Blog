import Post from '../../../models/Post';

export default async (parent, args, context) => {
    let limit = 9;
    let skip = limit * args.page;

    let posts = await Post.find().sort('-date').limit(limit).skip(skip).populate({
        path: 'created_by',
        populate: [{
            path: 'posts'
        }],
    }).exec();

    return posts;
}