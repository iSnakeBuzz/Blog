import React from 'react';

import style from '../../styles/admin/Auth.module.css'

const index = () => {
    return (
        <>
            <div className={style.auth_container}>
                <div className={style.auth}>

                    <div className={style.auth_title}>Welcome back!</div>
                    <div className={style.auth_description}>Sign in to proceed with the admin panel.</div>

                    <form className={style.auth_form}>
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />

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

export async function getServerSideProps({ params, res }) {
    let API_URL = process.env.API_URL;
    return {
        props: {
            API_URL
        }
    }
}

export default index;