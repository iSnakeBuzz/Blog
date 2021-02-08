import React from 'react';
import style from '../../../styles/posts/Posts.module.css'
import Post from './Post';
import SidePost from './SidePost';

import { useMediaQuery, useTheme } from '@material-ui/core';
import PostsContext from '../context/PostsContext';

const Posts = ({ type }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const data = React.useContext(PostsContext);

    const getPadding = (direction, px) => {
        if (matches) {
            if (direction === 'right') return { paddingRight: px }
            else if (direction === 'left') return { paddingLeft: px }
        }

        return {};
    }

    const getPosts = (rtype) => {
        let render = [];

        if (data)
            data.posts.map((item, id) => {
                if (rtype === 'timeline')
                    render.push(
                        <Post key={id} postData={{
                            name: item.uri,
                            title: item.title,
                            description: item.description,
                            img: item.banner,
                            author: item.created_by.username,
                            tags: item.tags,
                            created_at: item.created_at
                        }} />
                    );
                else if (rtype === 'popular')
                    render.push(
                        <SidePost key={id} postData={{
                            name: item.uri,
                            title: item.title,
                            description: item.description,
                            img: item.banner,
                            tags: item.tags,
                            created_at: item.created_at
                        }} />
                    )
            })

        return render;
    }


    return (
        <div style={getPadding(type === 'normal' ? 'right' : 'left', '30px')}>
            <div className={style.posts}>
                {type === "normal" ? (getPosts('timeline')) : (getPosts('popular'))}
            </div>
        </div>
    );
};

export default Posts;