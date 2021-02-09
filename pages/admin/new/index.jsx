import React from 'react';
import AdminLayout from '../../../utils/Modules/admin/AdminLayout';
import withAdmin from '../../../utils/Modules/admin/withAdmin';

const index = () => {
    return (
        <AdminLayout>
            Draft a new post.
        </AdminLayout>
    );
};

export default withAdmin({ needAuth: true, redirect: '/admin' }, index);