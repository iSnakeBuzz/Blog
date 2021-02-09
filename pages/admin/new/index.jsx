import React from 'react';
import { Container } from '@material-ui/core';
import AdminLayout from '../../../utils/Modules/admin/AdminLayout';
import withAdmin from '../../../utils/Modules/admin/withAdmin';
import ReactMarkdown from 'react-markdown';

const index = () => {
    return (
        <AdminLayout>
            <Container maxWidth="lg">
                <div>
                    <ReactMarkdown children={`xdasdasdads`} />
                </div>

            </Container>
        </AdminLayout>
    );
};

export default withAdmin({ needAuth: true, redirect: '/admin' }, index);