import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUser } from '@fortawesome/free-regular-svg-icons';

import styles from '../../../styles/Admin.module.css';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import SLink from '../navigation/SLink';

const Navigation = () => {
    return (
        <nav>
            <div className={styles.navItems}>
                <SLink href={"/admin/new"} className={styles.navItem} active={styles.navItemActive}>
                    <FAIcon icon={faEdit} size='2x' className={styles.navIcons} />
                </SLink>

                <SLink href={"/admin/posts"} className={styles.navItem} active={styles.navItemActive}>
                    <FAIcon icon={faBook} size='2x' className={styles.navIcons} />
                </SLink>

                <SLink href={"/admin/profile"} className={styles.navItem} active={styles.navItemActive}>
                    <FAIcon icon={faUser} size='2x' className={styles.navIcons} />
                </SLink>
            </div>
        </nav>
    );
};

export default Navigation;