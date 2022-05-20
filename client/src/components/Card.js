import React from "react";

const Card = ({ children }) => {
    return (
        <div className="rounded-lg py-7 px-5 bg-white bg-opacity-20">
            {children}
        </div>
    );
};

export default Card;
