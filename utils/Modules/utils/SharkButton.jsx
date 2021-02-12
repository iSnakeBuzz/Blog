import React from 'react';

const SharkButton = ({ children, onClick, color = "primary" }) => {

    const colorCss = color === "white" ? "bg-white" : color === "primary" ? "bg-primary" : "bg-secondary";

    return (
        <button className={colorCss} onClick={onClick}>
            {children}
        </button>
    );
};

export default SharkButton;