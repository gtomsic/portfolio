import React from "react";

const Button = ({ children, classes }) => {
    return (
        <button
            className={`${classes} py-2 px-7 mx-2 flex items-center duration-300 rounded-full border-2
        `}
        >
            {children}
        </button>
    );
};

export default Button;
