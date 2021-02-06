import React from 'react';
import style from '../../../styles/posts/Posts.module.css'
import Post from './Post';
import SidePost from './SidePost';

import { useMediaQuery, useTheme } from '@material-ui/core';

const Posts = ({ type }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const getPadding = (direction, px) => {
        if (matches) {
            if (direction === 'right') return { paddingRight: px }
            else if (direction === 'left') return { paddingLeft: px }
        }

        return {};
    }

    return (
        <div style={getPadding(type === 'normal' ? 'right' : 'left', '30px')}>
            <div className={style.posts}>
                {type === "normal" ? (<Post postData={{
                    name: "hello-world",
                    title: "Hello World",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis modi voluptates dolor velit sit suscipit hic voluptatibus dolores non at, nisi tempora! Quaerat impedit nostrum sunt culpa saepe eaque.",
                    img: "/banner.png",
                    author: "iSnakeBuzz_"
                }} />) : (<SidePost postData={{
                    name: "side-post",
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis modi voluptates dolor velit sit suscipit hic voluptatibus dolores non at, nisi tempora! Quaerat impedit nostrum sunt culpa saepe eaque.",
                    img: "/banner.png",
                    author: "iSnakeBuzz_"
                }} />)}
            </div>
        </div>
    );
};

export default Posts;