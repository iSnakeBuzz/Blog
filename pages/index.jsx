import React from 'react';

import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Posts from '../utils/Modules/posts/Posts'
import { Container, Grid, Hidden } from '@material-ui/core';

/* ApolloClient */
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import PostsContext from '../utils/Modules/context/PostsContext';
import IndexContainer from '../utils/Modules/index/IndexContainer';

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <PostsContext.Provider value={data || { posts: [] }}>
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


export async function getStaticProps({ params }) {
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

  return client.query({ query }).then(res => res.data).then(data => {
    return {
      props: {
        data
      },
      revalidate: 120,
    }
  }).catch((err) => {
    console.error(err);
    return {
      props: {
        data: { posts: [] }
      },
      revalidate: 120,
    }
  });
}


export default index;