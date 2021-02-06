import React from 'react';

const SharkButton = ({ children, onClick, color = "primary" }) => {

    const colorCss = color === "white" ? "bg-white" : color === "primary" ? "bg-primary" : "bg-secondary";

    return (
        <div className={`shark_button ${colorCss}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default SharkButton;