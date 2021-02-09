import React from 'react';
import withAdmin from '../../utils/Modules/admin/withAdmin';

import style from '../../styles/admin/Auth.module.css'

const index = ({ cookies }) => {
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

export default withAdmin({ needAuth: false, redirect: '/admin/new' }, index);