import React from 'react';
import style from '../../../styles/posts/SidePost.module.css';
import Link from 'next/link';
import Tag from '../utils/Tag';
import { getDate, timeSince } from '../../TimeUtils';

const SidePost = ({ postData }) => {

    const getTags = () => {
        let render = [];
        postData.tags.map((item, key) => {
            render.push(<Tag key={key} text={item} />);
        });
        return render;
    }

    return (
        <Link href={`/post/${postData.name}`} passHref>
            <div className={style.post}>
                <div className={style.sideImage}>
                    <div className={style.imageCont}>
                        <div className="absolute">
                            <img src={postData.img} alt={postData.name} />
                        </div>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.tags}>
                        <div className={style.tags_container}>{getTags()}</div>
                        <div style={{ marginLeft: "5px", fontWeight: "500" }}>● {timeSince(getDate(postData.created_at))}</div>
                    </div>

                    <div className={style.title}>{postData.title}</div>
                </div>
            </div>
        </Link>
    );
};

export default SidePost;