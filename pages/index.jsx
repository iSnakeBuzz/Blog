import React from 'react';

import Head from 'next/head'
import Layout from '../utils/Modules/Layout'
import Post from '../utils/Modules/posts/Post'
import SidePost from '../utils/Modules/posts/SidePost'
import Posts from '../utils/Modules/posts/Posts'
import { Grid, Hidden } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const index = () => {




  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Layout maxWidth="lg">
        <Grid
          container
        >

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
      </Layout>
    </>
  );
};

export default index;