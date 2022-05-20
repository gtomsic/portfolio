import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { dropFromTop } from "../utils/animation";

const MobileMenu = ({ setMenuIsOpen }) => {
    return (
        <motion.div
            variants={dropFromTop}
            initial="hidden"
            animate="visible"
            className="z-40 fixed top-0 right-0 bottom-0 left-0 bg-primary-dark flex justify-center items-center scroll-0"
        >
            <div className="grid grid-cols-1 gap-3 w-full text-xl">
                <Link to="/" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        Home
                    </button>
                </Link>
                <Link to="/projects" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        Projects
                    </button>
                </Link>
                <Link to="/blog" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        Blogs
                    </button>
                </Link>
                <Link to="/skills" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        Skills
                    </button>
                </Link>
                <Link to="/contact" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        Contacts
                    </button>
                </Link>
                <Link to="/about" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        About
                    </button>
                </Link>
                <Link to="/" className="mx-4">
                    <button
                        onClick={() => setMenuIsOpen(false)}
                        className="py-3 lg:py-1 px-5 rounded-full border-2 border-white font-bold bg-primary hover:bg-secondary duration-300 w-full"
                    >
                        Login
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default MobileMenu;
