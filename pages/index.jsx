import React from 'react';

import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Posts from '../utils/Modules/posts/Posts'
import { Container, Grid, Hidden } from '@material-ui/core';

/* ApolloClient */
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import PostsContext from '../utils/Modules/context/PostsContext';
import IndexContainer from '../utils/Modules/index/IndexContainer';

const index = () => {

  const [data, setData] = React.useState({
    posts: []
  });

  React.useEffect(async () => {
    const client = new ApolloClient({
      uri: process.env.API_ENDPOINT,
      cache: new InMemoryCache(),
    })

    let query = gql`
    query getPosts {
      posts(page: 0) {
        _id
        title
        description
        banner
        tags
        uri
        created_by {
          username
        }
        created_at
    }
  }`;

    const { data } = await client.query({ query });
    console.log("Home Data:", data)
    setData(data);
  }, [])

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <PostsContext.Provider value={data}>
        <Layout>
          <IndexContainer />
        </Layout>
      </PostsContext.Provider>

      <style jsx global>{`
        html, body {
          background-image: url("/utils/site-background.svg");
        }
      `}</style>
    </>
  );
};

export default index;