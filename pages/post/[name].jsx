import React from 'react';
import Layout from '../../utils/Modules/Layout';
import style from '../../styles/PostIndex.module.css';
import Router from 'next/router';

const index = () => {

    const back = () => {
        Router.back();
    }

    return (
        <Layout>
            <div className={style.title}>
                <img className={style.back} onClick={back} src="/icons/arrow-left-solid.svg" height="28px" width="28px" />
                <div className={style.vhr} />
                <span>Hello world</span>
            </div>

            <div className={style.post}>
                <div className={style.img}>
                    <img src="/banner.png" />
                </div>

                <div className={style.content}>xdd</div>
            </div>

        </Layout>
    );
};

export default index;