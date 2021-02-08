import React from 'react';

import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Posts from '../utils/Modules/posts/Posts'
import { Container, Grid, Hidden } from '@material-ui/core';
import PageDecoration from '../utils/Modules/utils/PageDecoration';

const index = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      {/* Page decoration */}
      <PageDecoration />

      <Layout>
        <Container maxWidth="lg">
          <div style={{ marginTop: "25px" }}>
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
  
}

export default index;