import React from 'react';

import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Post from '../utils/Modules/posts/Post'
import SidePost from '../utils/Modules/posts/SidePost'
import Posts from '../utils/Modules/posts/Posts'
import { Grid } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Layout maxWidth="lg">
        <div style={{ overflowX: "hidden" }}>
          <Grid
            container
            spacing={10}
          >

            <Grid item xs="7">
              <Posts>
                <Post postData={{
                  name: "hello-world",
                  title: "Hello World",
                  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis modi voluptates dolor velit sit suscipit hic voluptatibus dolores non at, nisi tempora! Quaerat impedit nostrum sunt culpa saepe eaque.",
                  img: "/banner.png"
                }} />
              </Posts>
            </Grid>

            <Grid item xs="5">
              <Posts>
                <SidePost postData={{
                  name: "side-post",
                  title: "Tremendo blog che, esto es increible.",
                  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis modi voluptates dolor velit sit suscipit hic voluptatibus dolores non at, nisi tempora! Quaerat impedit nostrum sunt culpa saepe eaque.",
                  img: "/banner.png"
                }} />
              </Posts>
            </Grid>


          </Grid>
        </div>
      </Layout>
    </>
  )
}
