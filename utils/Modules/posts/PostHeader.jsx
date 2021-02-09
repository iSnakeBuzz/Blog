import React from 'react';
import { Avatar, Container } from '@material-ui/core';

import style from '../../../styles/posts/PostIndex.module.css';
import PostContext from '../context/PostContext';
import { getDate, timeSince } from '../../TimeUtils';

const PostHeader = () => {

    const data = React.useContext(PostContext);

    return (
        <div className={style.header + " noselect"}>
            <Container maxWidth="lg">
                <div className={style.title_container}>
                    <div className={style.title_head}>
                        <div className={style.title_tag}>{data && data.post.tags} ● {timeSince(getDate(data && data.post.created_at))}</div>
                        <div className={style.title_text}>{data && data.post.title}</div>
                        <div className={style.author}>
                            <div className={style.author_flex}>
                                <Avatar alt="Hello world" src="/localhost/xd.png" />
                                <div className={style.author_name_cont}>
                                    <div className={style.author_name}>{data && data.post.created_by.username}</div>
                                    <div className={style.author_date}>{getDate(data && data.post.created_at).toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" fillOpacity="1" d="M0,320L30,293.3C60,267,120,213,180,208C240,203,300,245,360,272C420,299,480,309,540,288C600,267,660,213,720,176C780,139,840,117,900,144C960,171,1020,245,1080,250.7C1140,256,1200,192,1260,192C1320,192,1380,256,1410,288L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            </div>
        </div>
    );
};

export default PostHeader;