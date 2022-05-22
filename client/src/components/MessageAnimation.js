import React from "react";
import { motion } from "framer-motion";

import { sendEmail } from "../utils/animation";

const MessageAnimation = ({ color }) => {
    return (
        <div
            className={`min-h-[200px] flex flex-col justify-center items-center ${color}`}
        >
            <div className="w-[200px] h-[50px] flex justify-between items-center">
                <div className="relative flex justify-center items-center">
                    <div className="absolute">
                        <i className="fa-solid fa-desktop text-3xl"></i>
                    </div>
                    <motion.div
                        animate="visible"
                        variants={sendEmail}
                        className="absolute"
                    >
                        <i className="fa-solid fa-envelope"></i>
                    </motion.div>
                </div>
                <div>
                    <i className="fa-solid fa-earth-americas text-3xl"></i>
                </div>
            </div>
            <span>Sending...</span>
        </div>
    );
};

export default MessageAnimation;
