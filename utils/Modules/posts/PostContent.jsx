import React from 'react';
import { Grid } from '@material-ui/core';

import style from '../../../styles/posts/PostIndex.module.css';
import PostContext from '../context/PostContext';

const PostContent = () => {

    const data = React.useContext(PostContext);

    return (
        <div style={{ paddingBottom: "20px", paddingTop: "50px" }}>
            <Grid
                container
                justify="center"
            >
                <Grid item xs={12} md={9}>
                    <div className={style.content}>
                        {data && data.post.content}
                    </div>
                </Grid>
            </Grid>
        </div >
    );
};

export default PostContent;