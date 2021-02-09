import React from 'react';
import style from '../../../styles/posts/Post.module.css';
import Link from 'next/link';
import Tag from '../utils/Tag';
import { Avatar, makeStyles } from '@material-ui/core';
import { getDate, timeSince } from '../../TimeUtils';

const useStyles = makeStyles(() => ({
    small: {
        width: "32px",
        height: "32px",
    },
}));

const Post = ({ postData }) => {

    const avTheme = useStyles();

    const getTags = () => {
        let render = [];
        postData.tags.map((item, key) => {
            render.push(<Tag text={item} />);
        });
        return render;
    }

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
                    <div className={style.tags_container}>
                        {getTags()}
                    </div>
                    <div style={{ marginLeft: "5px", fontWeight: "500" }}>● {timeSince(getDate(postData.created_at))}</div>
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
                <Avatar className={avTheme.small} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Link href={`/profile/${postData.author}`}>
                    <div className={style.author_name}>{postData.author}</div>
                </Link>
            </div>
        </div>
    );
};

export default Post;