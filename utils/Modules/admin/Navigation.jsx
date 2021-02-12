import React from 'react';
import SLink from '../navigation/SLink';
import { deleteCookie } from '../../CookieUtils';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUser } from '@fortawesome/free-regular-svg-icons';

import { faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Typography } from '@material-ui/core';

import Router from 'next/router'

import styles from '../../../styles/admin/Admin.module.css';

const Navigation = () => {

    const handleLogout = (e) => {
        deleteCookie('authorization');
        Router.push('/admin/');
    }

    return (
        <nav>
            <div className={styles.navItems}>
                <SLink href={"/admin/new"} className={styles.navItem} active={styles.navItemActive}>
                    <Tooltip title={
                        <React.Fragment>
                            <Typography color="inherit">Create new post</Typography>
                            <em>Click to create a new blog entry.</em>
                        </React.Fragment>
                    } placement="right" arrow>
                        <div>
                            <FAIcon icon={faEdit} size='2x' className={styles.navIcons} />
                        </div>
                    </Tooltip>
                </SLink>


                <SLink href={"/admin/posts"} className={styles.navItem} active={styles.navItemActive}>
                    <Tooltip title={
                        <React.Fragment>
                            <Typography color="inherit">See the entries</Typography>
                            <em>Click to see the entries posted.</em>
                        </React.Fragment>
                    } placement="right" arrow>
                        <div>
                            <FAIcon icon={faBook} size='2x' className={styles.navIcons} />
                        </div>
                    </Tooltip>
                </SLink>

                <div className={styles.profileItems}>
                    <SLink href={"/admin/profile"} className={styles.navItem} active={styles.navItemActive}>
                        <div>
                            <FAIcon icon={faUser} size='2x' className={styles.navIcons} />
                        </div>
                    </SLink>
                    <FAIcon icon={faSignOutAlt} onClick={handleLogout} size='2x' className={styles.navIcons} />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;