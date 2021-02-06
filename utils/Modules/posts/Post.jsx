import React from 'react';
import style from '../../../styles/posts/Post.module.css';
import Link from 'next/link';
import Tag from '../utils/Tag';

const Post = ({ postData }) => {
    return (
        <div className={style.post}>
            <Link href={`/post/${postData.name}`} passHref>
                <div className={style.imageCont}>
                    <div className="absolute">
                        <img src={postData.img} alt={postData.name} />
                    </div>
                </div>
            </Link>

            <div>
                <div className={style.tags}>
                    <Tag text="Test" />
                    <div style={{ marginLeft: "5px", fontWeight: "500" }}>● 4 min</div>
                </div>

                <Link href={`/post/${postData.name}`} passHref>
                    <div className={style.title}>{postData.title}</div>
                </Link>

                <div className={style.description}>
                    <span>{postData.description}</span>

                    <Link href={`/post/${postData.name}`}>
                        <span className={style.readMore}>Read more</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;