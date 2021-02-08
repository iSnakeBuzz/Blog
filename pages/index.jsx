import React from 'react';

import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Posts from '../utils/Modules/posts/Posts'
import { Container, Grid, Hidden } from '@material-ui/core';
import PageDecoration from '../utils/Modules/utils/PageDecoration';

/* ApolloClient */
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      {/* Page decoration */}
      <PageDecoration />

      <Layout>
        <Container maxWidth="lg">
          <div style={{ marginTop: "30px" }}>
            <Grid container>
              <Hidden mdUp>
                <Grid item xs={12}>
                  <Posts type="best" />
                </Grid>
              </Hidden>

              <Grid item xs={12} md={7}>
                <Posts type="normal" />
              </Grid>

              <Hidden smDown>
                <Grid item md={5}>
                  <Posts type="best" />
                </Grid>
              </Hidden>
            </Grid>
          </div>
        </Container>
      </Layout>
    </>
  );
};


export async function getStaticProps() {
  let apiURL = process.env.API_URL;

  if (!apiURL) return { props: {} };

  const client = new ApolloClient({
    uri: apiURL,
    cache: new InMemoryCache(),
  })

  let query = gql`
    query getPosts {
      posts(page: 0) {
        title
        description
        content
        uri
        tags
        views
        created_at
    }
  }`;

  const { data } = await client.query({ query });

  return {
    props: {
      posts: data
    }
  }
}

export default index;