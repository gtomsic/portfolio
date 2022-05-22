import React from "react";
import gabrielImage from "../assets/gabriel.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import awrow from "../assets/images/awrow.png";
import gstop from "../assets/images/gstop.png";

import LeftFeatureProject from "../components/LeftFeatureProject";
import {
    pulse,
    container,
    showDelay,
    zoomIn,
    zoomOutIn,
} from "../utils/animation";
import Container from "../components/Container";
import RightFeatureProject from "../components/RightFeatureProject";

const topProjects = [
    {
        id: "1",
        title: "Awrow | Social Network",
        description: `Is a social network application I build where everyone has freedom to express themselves. Created in ReactJS Framework, Redux for Global State Management, JWT('Jsonwebtoken'), NodeJS, Express, Mysql, Tailwindcss, Nodemailer for sending email verification, BcryptJS for password hashing and more.`,
        image: awrow,
        github: "https://github.com/gtomsic/awrow",
        live: "https://www.awrow.com",
    },
    {
        id: "2",
        title: "Gstop | E Commerce Application",
        description: `Example of E-Commerce application I build with paypal payment method Created in React Framework, JWT('Jsonwebtoken'), NodeJS, Express, Postgresql, Tailwindcss, BcryptJS for password hashing and more.`,
        image: gstop,
        github: "https://github.com/gtomsic/gstop_eCommerce",
        live: "https://gstop-client.herokuapp.com",
    },
];

const HomePage = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-[50px] md:mt-[100px]"
        >
            <Container>
                <div className="flex px-3 md:px-11 flex-col lg:flex-row">
                    <motion.div
                        variants={showDelay}
                        className="min-w-[300px] flex justify-center md:justify-start lg:justify-end"
                    >
                        <div className="overflow-hidden w-[200px] h-[200px] rounded-full mb-11 mr-0 md:rounded-md lg:h-[400px] lg:w-[300px] lg:rounded-md lg:mb-0 lg:mr-7 drop-shadow-lg border-4 border-white">
                            <img
                                src={gabrielImage}
                                alt="Gabriel Tomsic"
                                className="w-full"
                            />
                        </div>
                    </motion.div>
                    <div className="text-xl md:text-2xl ">
                        <h4 className="drop-shadow-md">Hi my name is</h4>
                        <motion.h1
                            variants={zoomOutIn}
                            className="text-2xl md:text-5xl lg:text-7xl font-bold"
                        >
                            GABRIEL TOMSIC
                        </motion.h1>
                        <motion.h1
                            variants={pulse}
                            className="text-2xl md:text-5xl lg:text-7xl text-secondary drop-shadow-md font-bold"
                        >
                            FULL STACK DEVELOPER
                        </motion.h1>
                        <h4 className="text-justify drop-shadow-md">
                            Using cutting edge frameworks like javascript,
                            react, redux, node, jsonwebtoken, bcryptjs, mysql,
                            postgresql, tailwindcss, framer-motion, html/css
                            sass, github and more...
                        </h4>
                        <br />
                        <h4 className="text-justify drop-shadow-md">
                            Currently looking for a job opportunity where, I can
                            stay and grow for the rest of my proffesion/carrier
                            as a software developer.
                        </h4>
                        <div className="mt-11 w-[80%] mx-auto grid grid-cols-1 gap-6 md:mx-0 md:flex md:flex-row md:w-full">
                            <Link
                                to="/projects"
                                className="flex-1 md:flex-none"
                            >
                                <motion.button
                                    variants={zoomIn}
                                    className="w-full md:w-auto bg-secondary font-bold rounded-md py-3 md:py-5 px-11 m-0 md:m-2 lg:m-4 border-4 border-white hover:bg-primary duration-500"
                                >
                                    View My Work
                                </motion.button>
                            </Link>
                            <Link to="/contact" className="flex-1 md:flex-none">
                                <motion.button
                                    variants={zoomIn}
                                    className="w-full md:w-auto bg-primary font-bold rounded-md py-3 md:py-5 px-11 m-0 md:m-2 lg:m-4 border-4 border-white hover:bg-secondary duration-500"
                                >
                                    Contact Me
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="mt-[100px] md:mt-[200px] bg-dark pt-[80px] lg:pt-[150px] px-3 md:px-11 text-center">
                <h2 className="text-4xl pb-2 md:text-5xl lg:text-6xl font-bold text-secondary drop-shadow-md border-b-4 inline-block uppercase">
                    Top Projects
                </h2>
            </div>
            {topProjects.map((project, index) => {
                if (Number(index) % 2 !== 0) {
                    return (
                        <div
                            key={project.id}
                            className="bg-white py-[80px] md:py-[150px] px-3 md:px-11 text-center"
                        >
                            <RightFeatureProject project={project} />
                        </div>
                    );
                } else {
                    return (
                        <div
                            key={project.id}
                            className="bg-dark py-[80px] md:py-[150px] px-3 md:px-11 text-center"
                        >
                            <LeftFeatureProject project={project} />
                        </div>
                    );
                }
            })}
        </motion.div>
    );
};

export default HomePage;
