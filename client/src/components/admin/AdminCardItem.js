import React from "react";

const AdminCardItem = ({ color, children }) => {
    return (
        <div
            className={`${color} rounded-sm md:rounded-md bg-opacity-95 drop-shadow-md min-h-[100px] h-full`}
        >
            {children}
        </div>
    );
};

export default AdminCardItem;
