import React from 'react';
import { Container } from '@material-ui/core';

const Layout = ({ children, maxWidth }) => {
    return (
        <Container maxWidth={maxWidth}>
            <main>
                {children}
            </main>
        </Container>
    );
};

export default Layout;