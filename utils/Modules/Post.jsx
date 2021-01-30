import React from 'react';
import style from '../../styles/Post.module.css';
import Link from 'next/link';

const Post = ({ postData }) => {
    return (
        <div className={style.post}>
            <Link href={"/post/"} passHref>
                <div className={style.imageCont}>
                    <div className="absolute">
                        <img src={postData.img} />
                    </div>
                </div>
            </Link>

            <div className={style.postContent}>
                <div className={style.title}>{postData.title}</div>
                <div className={style.description}>
                    <span>{postData.description}</span>
                    <span className={style.readMore}>Read more</span>
                </div>
            </div>
        </div>
    );
};

export default Post;