import React from 'react';
import style from '../../../styles/posts/SidePost.module.css';
import Link from 'next/link';
import Tag from '../utils/Tag';

const SidePost = ({ postData }) => {
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
                        <Tag text="Test" />
                        <div style={{ marginLeft: "5px", fontWeight: "500" }}>● 4 min</div>
                    </div>

                    <div className={style.title}>{postData.title}</div>
                </div>
            </div>
        </Link>
    );
};

export default SidePost;