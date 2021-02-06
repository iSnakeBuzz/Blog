import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './navigation/Navbar';

const Layout = ({ children, maxWidth }) => {
    return (
        <>
            <Navbar />
            <Container maxWidth={maxWidth}>
                <main>
                    {children}
                </main>
            </Container>
        </>
    );
};

export default Layout;