import React from 'react';
import style from '../../styles/Posts.module.css'

const Posts = ({ children }) => {
    return (
        <div className={style.posts}>
            {children}
        </div>
    );
};

export default Posts;