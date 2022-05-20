import React from "react";
import { motion } from "framer-motion";
import { container } from "../utils/animation";

const BlogPage = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2 className="text-3xl md:text-5xl z-20 font-bold drop-shadow-md w-full">
                BlogPage
            </h2>
        </motion.div>
    );
};

export default BlogPage;
