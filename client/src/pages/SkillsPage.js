import React from "react";
import { motion } from "framer-motion";

import { container, zoomOutIn } from "../utils/animation";
import Container from "../components/Container";

const skills = [
    {
        name: "javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
        image: "/images/javascript.jpg",
    },
    {
        name: "react",
        link: "https://reactjs.org/",
        image: "/images/react.jpg",
    },
    {
        name: "redux",
        link: "https://redux.js.org/",
        image: "/images/redux.jpg",
    },
    {
        name: "node",
        link: "https://nodejs.org/en/",
        image: "/images/node.jpg",
    },
    {
        name: "mysql",
        link: "https://www.mysql.com/",
        image: "/images/mysql.jpg",
    },
    {
        name: "sequelize",
        link: "https://sequelize.org/",
        image: "/images/sequelize.jpg",
    },
    {
        name: "postgresql",
        link: "https://www.postgresql.org/",
        image: "/images/postgresql.jpg",
    },
    {
        name: "tailwindcss",
        link: "https://tailwindcss.com/",
        image: "/images/tailwindcss.jpg",
    },
];

const SkillsPage = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <div className="px-3 md:px-6 lg:px-11 mb-40">
                    <h2 className="text-3xl mb-11 md:text-5xl z-20 font-bold drop-shadow-md w-full">
                        Skills
                    </h2>
                    <div className="mt-11 grid grid-cols-2 gap-1 md:gap-2 lg:gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {skills.map((skill, index) => (
                            <motion.a
                                href={skill.link}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                                variants={zoomOutIn}
                                className="flex flex-col justify-center text-center capitalize bg-primary-dark p-3 rounded-none md:rounded-md cursor-pointer"
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="cursor-pointer"
                                />
                                <h3 className="text-2xl md:text-3xl pt-6 mb-3">
                                    {skill.name}
                                </h3>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default SkillsPage;
