import React from 'react';
import Layout from '../../utils/Modules/Layout';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

import { Container } from '@material-ui/core';

import PostHeader from '../../utils/Modules/posts/PostHeader';
import PostContext from '../../utils/Modules/context/PostContext';

import PostContent from '../../utils/Modules/posts/PostContent';
import PostBanner from '../../utils/Modules/posts/PostBanner';

const index = ({ data }) => {

    React.useEffect(() => {
        console.log("Data:", data);
    }, []);

    if (!data) return (<></>);

    return (
        <PostContext.Provider value={data}>
            <Layout color="primary">
                <PostHeader />

                <Container maxWidth="lg">
                    <PostBanner />
                    <PostContent />
                </Container>
            </Layout>
        </PostContext.Provider>
    );
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps({ params, res }) {
    let apiURL = process.env.API_URL;

    if (!apiURL) return { props: {} };

    const client = new ApolloClient({
        uri: apiURL,
        cache: new InMemoryCache(),
    })

    let query = gql`
    query getPost($name: String) {
        post(uri: $name) {
            title
            description
            banner
            content
            tags
            created_at
            created_by {
                username
            }
        }
    }`;

    const { data } = await client.query({
        query,
        variables: { name: params.name }
    });

    if (!data || !data.post) return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    };

    return {
        props: { data },
        revalidate: 300
    }
}

export default index;