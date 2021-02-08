import React from 'react';

import PostContext from '../context/PostContext';
import style from '../../../styles/posts/PostIndex.module.css';

const PostBanner = () => {
    const data = React.useContext(PostContext);
    return (
        <div className={style.img}>
            <img src={data && data.post.banner} alt="Post Banner" />
        </div>
    );
};

export default PostBanner;