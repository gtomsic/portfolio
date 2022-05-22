import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container } from "../utils/animation";
import Container from "../components/Container";
import image from "../assets/square.jpg";

const Login = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <div className="px-3 mb-[20vh]">
                    <div className="mt-[5vh] flex flex-col items-center">
                        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white">
                            <img src={image} alt="Gabriel Tomsic" />
                        </div>
                        <h2 className="text-3xl md:text-5xl z-20 font-bold drop-shadow-md w-full py-6 text-center">
                            Administrator
                        </h2>
                        <form className="px-5 py-11 rounded-lg drop-shadow-md bg-dark border-2 border-white max-w-[500px] w-full">
                            <div className="grid grid-cols-1 my-2">
                                <input
                                    required
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                />
                            </div>
                            <div className="grid grid-cols-1 my-2">
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                />
                            </div>
                            <div className="grid grid-cols-1 my-2">
                                <input
                                    required
                                    type="password"
                                    name="secret"
                                    placeholder="Secrect Key"
                                    className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                />
                            </div>
                            <div className="grid grid-cols-1 my-2">
                                <button className="p-3 mt-4 bg-primary rounded-md font-bold">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default Login;
