import React from 'react';
import Navigation from './Navigation';
import styles from '../../styles/Admin.module.css';

const AdminLayout = ({ children }) => {
    return (
        <div className={styles.admin}>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;