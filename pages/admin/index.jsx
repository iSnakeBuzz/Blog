import React from 'react';
import Router from 'next/router';

import withAdmin from '../../utils/Modules/admin/withAdmin';
import Cookies from 'universal-cookie';

import style from '../../styles/admin/Auth.module.css'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { setCookie } from '../../utils/CookieUtils';

const index = ({ cookies }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = JSON.parse(serialize_form(e.target));

        const client = new ApolloClient({
            uri: process.env.API_ENDPOINT,
            cache: new InMemoryCache(),
        })

        let query = gql`
        query loginUser(
            $username: String!
            $password: String!
        )  {
            login(user: { username: $username, password: $password }) {
                jwt
                username
            }
        }`;

        console.log("Sending:", formData)

        client.query({ query, variables: { ...formData } }).then(res => {
            let { login } = res.data;
            if (login && login.jwt) {
                setCookie('authorization', login.jwt);
                Router.push('/admin/new');
            };
        }).catch(e => {
            console.log("error", e);
        });
    }

    const serialize_form = form => JSON.stringify(
        Array.from(new FormData(form).entries())
            .reduce((m, [key, value]) => Object.assign(m, { [key]: value }), {})
    );

    return (
        <>
            <div className={style.auth_container}>
                <div className={style.auth}>

                    <div className={style.auth_title}>Welcome back!</div>
                    <div className={style.auth_description}>Sign in to proceed with the admin panel.</div>

                    <form className={style.auth_form} onSubmit={handleSubmit}>
                        <input type="text" id="username" name="username" placeholder="Username" />
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <button type="submit">LOGIN</button>
                    </form>
                </div>
            </div>

            <style jsx global>{`
                html,body {
                    background-image: url('/utils/login-background.svg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
        </>
    );
};

export default withAdmin({ needAuth: false, redirect: '/admin/new' }, index);