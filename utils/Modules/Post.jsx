import React from 'react';
import style from '../../styles/Post.module.css';
import Link from 'next/link';

const Post = ({ postData }) => {
    return (
        <div className={style.post}>
            <Link href={`/post/${postData.name}`} passHref>
                <div className={style.imageCont}>
                    <div className="absolute">
                        <img src={postData.img} />
                    </div>
                </div>
            </Link>

            <div className={style.postContent}>
                <Link href={`/post/${postData.name}`} passHref>
                    <div className={style.title}>{postData.title}</div>
                </Link>
                <div className={style.description}>
                    <span>{postData.description}</span>
                    <Link href={`/post/${postData.name}`}>
                        <span className={style.readMore}>Read more</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Post;