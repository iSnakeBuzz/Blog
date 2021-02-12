import React from 'react';

import style from '../../../styles/editor/editor.module.css';

const SharkEditor = ({ onChange, placeholder }) => {
    return (
        <textarea className={style.shark} onChange={onChange} placeholder={placeholder} />
    );
};

export default SharkEditor;