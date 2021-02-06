import React from 'react';

import styles from '../../../styles/utils/Tag.module.css'

const Tag = ({ text }) => {
    return (
        <div className={styles.tag}>
            <div className={styles.title}>{text}</div>
        </div>
    );
};

export default Tag;