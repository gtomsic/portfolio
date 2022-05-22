import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ menuIsOpen, setMenuIsOpen }) => {
    const location = useLocation();
    return (
        <div className="flex items-center">
            <div className="hidden lg:flex lg:visible">
                <Link to="/" className="mx-1">
                    <button
                        className={
                            location.pathname === "/"
                                ? `py-1 px-5 rounded-md drop-shadow-md font-bold bg-primary text-white hover:bg-secondary duration-300 w-full`
                                : `py-1 px-5 rounded-md font-bold hover:bg-secondary duration-300 w-full`
                        }
                    >
                        Home
                    </button>
                </Link>
                <Link to="/projects" className="mx-1">
                    <button
                        className={
                            location.pathname === "/projects"
                                ? `py-1 px-5 rounded-md drop-shadow-md font-bold bg-primary text-white hover:bg-secondary duration-300 w-full`
                                : `py-1 px-5 rounded-md font-bold hover:bg-secondary duration-300 w-full`
                        }
                    >
                        Projects
                    </button>
                </Link>
                <Link to="/blog" className="mx-1">
                    <button
                        className={
                            location.pathname === "/blog"
                                ? `py-1 px-5 rounded-md drop-shadow-md font-bold bg-primary text-white hover:bg-secondary duration-300 w-full`
                                : `py-1 px-5 rounded-md font-bold hover:bg-secondary duration-300 w-full`
                        }
                    >
                        Blogs
                    </button>
                </Link>
                <Link to="/skills" className="mx-1">
                    <button
                        className={
                            location.pathname === "/skills"
                                ? `py-1 px-5 rounded-md drop-shadow-md font-bold bg-primary text-white hover:bg-secondary duration-300 w-full`
                                : `py-1 px-5 rounded-md font-bold hover:bg-secondary duration-300 w-full`
                        }
                    >
                        Skills
                    </button>
                </Link>
                <Link to="/contact" className="mx-1">
                    <button
                        className={
                            location.pathname === "/contact"
                                ? `py-1 px-5 rounded-md drop-shadow-md font-bold bg-primary text-white hover:bg-secondary duration-300 w-full`
                                : `py-1 px-5 rounded-md font-bold hover:bg-secondary duration-300 w-full`
                        }
                    >
                        Contact
                    </button>
                </Link>
                <Link to="/about" className="mx-1">
                    <button
                        className={
                            location.pathname === "/about"
                                ? `py-1 px-5 rounded-md drop-shadow-md font-bold bg-primary text-white hover:bg-secondary duration-300 w-full`
                                : `py-1 px-5 rounded-md font-bold hover:bg-secondary duration-300 w-full`
                        }
                    >
                        About
                    </button>
                </Link>
                <div className="mx-5 hidden md:flex md:items-center text-xl font-bold">
                    <span>|</span>
                </div>
                <Link to="/login">
                    <button className="py-1 px-5 drop-shadow-md bg-secondary rounded-md hover:bg-primary duration-300 font-bold">
                        Login
                    </button>
                </Link>
            </div>
            <button
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className="w-8 h-8 flex z-50 justify-center items-center rounded-md border-2 border-light lg:hidden outline-none"
            >
                {menuIsOpen ? (
                    <i className="fa-solid fa-xmark"></i>
                ) : (
                    <i className="fa-solid fa-bars"></i>
                )}
            </button>
        </div>
    );
};

export default Navbar;
