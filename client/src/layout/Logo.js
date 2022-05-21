import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="text-2xl flex items-center font-bold uppercase drop-shadow-lg text-white">
            <Link to="/">Gabriel Tomsic</Link>
        </div>
    );
};

export default Logo;
