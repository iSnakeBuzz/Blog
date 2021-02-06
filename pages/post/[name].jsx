import React from 'react';
import Layout from '../../utils/Modules/Layout';
import Router from 'next/router';
import { Avatar, Container, Grid } from '@material-ui/core';

import style from '../../styles/posts/PostIndex.module.css';
import decoration from '../../styles/utils/Decoration.module.css'

const index = () => {

    const back = () => {
        Router.back();
    }

    return (
        <Layout color="primary">
            <div className={style.header + " noselect"}>
                <Container maxWidth="lg">
                    <div className={style.title_container}>
                        <div className={style.title_head}>
                            <div className={style.title_tag}>Test ● 4 min</div>
                            <div className={style.title_text}>Hello world</div>
                            <div className={style.author}>
                                <div className={style.author_flex}>
                                    <Avatar alt="Hello world" src="/localhost/xd.png" />
                                    <div className={style.author_name_cont}>
                                        <div className={style.author_name}>iSnakeBuzz_</div>
                                        <div className={style.author_date}>06/02/2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className={decoration.wave_container}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" fillOpacity="1" d="M0,320L30,293.3C60,267,120,213,180,208C240,203,300,245,360,272C420,299,480,309,540,288C600,267,660,213,720,176C780,139,840,117,900,144C960,171,1020,245,1080,250.7C1140,256,1200,192,1260,192C1320,192,1380,256,1410,288L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                </div>
            </div>

            <Container maxWidth="lg">
                <div className={style.img}>
                    <img src="/banner.png" />
                </div>

                <div style={{ paddingBottom: "20px", paddingTop: "50px" }}>
                    <Grid
                        container
                        justify="center"
                    >
                        <Grid item xs={12} md={9}>
                            <div className={style.content}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime veritatis ex sequi eligendi reiciendis natus sed omnis dicta hic commodi possimus aliquid aliquam exercitationem, velit unde cumque totam blanditiis.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa molestias dolore possimus saepe? Saepe hic iusto culpa, voluptas aperiam vel provident esse voluptates odio enim molestiae, ipsum consequatur excepturi in.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias amet eligendi modi laudantium, error doloribus beatae non quisquam sequi fuga natus nostrum tempore nemo? Officiis facere rerum fugit totam!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem quam, molestias perferendis reprehenderit, asperiores placeat natus, voluptatibus harum magni ab ratione repellat consequuntur iusto ipsa? Unde amet quo cumque?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ab ducimus veritatis fugiat. Nemo, quo. Commodi quam delectus fugiat debitis illo, dolorem, saepe id laudantium hic sit incidunt aperiam ducimus?
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Layout>
    );
};

export default index;