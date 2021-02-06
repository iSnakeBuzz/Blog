import React from 'react';
import Layout from '../../utils/Modules/Layout';
import style from '../../styles/posts/PostIndex.module.css';
import Router from 'next/router';
import { Avatar, Container, Grid } from '@material-ui/core';

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
                        <Grid item xs="12" md="9">
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