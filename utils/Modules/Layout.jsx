import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './navigation/Navbar';

const Layout = ({ children, color }) => {
    return (
        <>
            <Navbar color={color} />
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;