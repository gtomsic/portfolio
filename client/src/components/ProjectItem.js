import React from "react";

import { motion } from "framer-motion";
import { pulse, rightZoomIn, showDelay } from "../utils/animation";

const ProjectItem = ({ project }) => {
    return (
        <motion.div variants={rightZoomIn} className="relative">
            <div className="title border-b border-b-light bg-primary bg-opacity-30 px-3 py-3">
                <h4 className="text-xl font-bold">{project.title}</h4>
            </div>
            <div className="description border-b border-b-light">
                <h5 className="text-lg font-bold">Description</h5>
                <div className="description py-2">{project.description}</div>
                <div className="flex my-2">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-light flex items-center text-white bg-dark hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full cursor-pointer"
                    >
                        <i className="fa-brands fa-github-square text-xl md:mr-2"></i>
                        Github
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-light flex items-center text-white bg-primary hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full cursor-pointer"
                    >
                        <i className="fa-solid fa-display md:mr-2"></i>
                        Live View
                    </a>
                </div>
            </div>
            <div className="images border-b border-b-light">
                <h5 className="text-lg font-bold">Images</h5>
                <div className="images py-2 grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {project?.images?.map((image) => (
                        <motion.div
                            variants={showDelay}
                            key={image.id}
                            className="flex justify-center overflow-hidden"
                        >
                            <img
                                src={image.url}
                                alt="awrow"
                                className="w-100%"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex p-3">
                <div className="flex">
                    <button className="border border-light flex items-center text-white bg-primary hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full">
                        {project.comments.length}
                        <i className="fa-solid fa-comment-dots ml-2 md:mx-2"></i>
                        Comments
                    </button>
                    <motion.button
                        variants={pulse}
                        className="border border-light flex items-center text-white bg-danger hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full"
                    >
                        {project.loves.length}
                        <i className="fa-solid fa-heart ml-2 md:mx-2"></i>
                        Loves
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectItem;
