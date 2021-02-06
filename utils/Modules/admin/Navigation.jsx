import React from 'react';
import SLink from '../navigation/SLink';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUser } from '@fortawesome/free-regular-svg-icons';

import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Typography } from '@material-ui/core';

import styles from '../../../styles/admin/Admin.module.css';

const Navigation = () => {
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

                <SLink href={"/admin/profile"} className={styles.navItem} active={styles.navItemActive}>
                    <FAIcon icon={faUser} size='2x' className={styles.navIcons} />
                </SLink>
            </div>
        </nav>
    );
};

export default Navigation;