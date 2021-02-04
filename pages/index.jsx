import React from 'react';
import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Post from '../utils/Modules/Post'
import Posts from '../utils/Modules/Posts'

export default function Home() {


  return (
    <div className="">
      <Head>
        <title>Blog</title>
      </Head>

      <Layout>
        <Posts>
          <Post postData={{
            name: "hello-world",
            title: "Hello World",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis modi voluptates dolor velit sit suscipit hic voluptatibus dolores non at, nisi tempora! Quaerat impedit nostrum sunt culpa saepe eaque.",
            img: "/banner.png"
          }} />
        </Posts>

      </Layout>

    </div>
  )
}
