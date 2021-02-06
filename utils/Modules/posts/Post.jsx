import React from 'react';
import style from '../../../styles/posts/Post.module.css';
import Link from 'next/link';
import Tag from '../utils/Tag';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    small: {
        width: "32px",
        height: "32px",
    },
    large: {
        width: "64px",
        height: "64px",
    },
}));

const Post = ({ postData }) => {

    const theme = useStyles();

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

            <div className={style.author}>
                <Avatar className={theme.small} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className={style.author_name}>{postData.author}</div>
            </div>
        </div>
    );
};

export default Post;