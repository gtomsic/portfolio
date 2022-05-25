import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fromRight, showDelay } from "../utils/animation";

const RightDrawer = ({ isOpen, setIsOpen }) => {
    return ReactDOM.createPortal(
        <>
            {isOpen ? (
                <motion.div
                    variants={showDelay}
                    initial="hidden"
                    animate="visible"
                    className="fixed overflow-y-auto bg-dark bg-opacity-95 top-0 right-0 bottom-0 left-0 z-50 flex justify-end h-full w-full"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        variants={fromRight}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white max-w-[250px] w-full"
                    >
                        <div className="bg-primary flex justify-between items-center px-3 min-h-[70px] text-xl font-bold">
                            <div>Gabriel Tomsic</div>
                            <div>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-8 h-8 flex z-50 justify-center items-center rounded-md border-2 border-light lg:hidden outline-none"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start mt-5">
                            <Link to="/" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    Home
                                </button>
                            </Link>
                            <Link to="/projects" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    Projects
                                </button>
                            </Link>
                            <Link to="/blog" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    Blogs
                                </button>
                            </Link>
                            <Link to="/skills" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    Skills
                                </button>
                            </Link>
                            <Link to="/contact" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    Contact
                                </button>
                            </Link>
                            <Link to="/about" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    About
                                </button>
                            </Link>
                            <Link to="/login" className="mx-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 lg:py-1 text-gray hover:text-secondary font-bold text-left duration-300 w-full"
                                >
                                    Login
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </>,
        document.querySelector("#portal")
    );
};

export default RightDrawer;
