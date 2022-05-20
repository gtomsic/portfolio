import React from "react";

import { motion } from "framer-motion";
import { pulse } from "../utils/animation";

const ProjectItem = ({ project }) => {
    return (
        <div className="relative">
            <div className="title border-b border-b-light bg-primary bg-opacity-30 px-3 py-3">
                <h4 className="text-xl font-bold">{project.title}</h4>
            </div>
            <div className="description border-b border-b-light">
                <h5 className="text-lg font-bold">Description</h5>
                <div className="description py-2">{project.description}</div>
            </div>
            <div className="images border-b border-b-light">
                <h5 className="text-lg font-bold">Images</h5>
                <div className="images py-2 grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {project &&
                        project.images.map((image) => (
                            <div key={image.id}>
                                <img src={image.url} alt="awrow" />
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex justify-between p-3">
                <div className="flex">
                    <button className="border border-light flex items-center text-white bg-primary hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full">
                        {project.comments.length}
                        <i className="fa-solid fa-comment-dots ml-2 md:mx-2"></i>
                        <span className="hidden md:inline-block">Comments</span>
                    </button>
                    <motion.button
                        variants={pulse}
                        className="border border-light flex items-center text-white bg-danger hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full"
                    >
                        {project.loves.length}
                        <i className="fa-solid fa-heart ml-2 md:mx-2"></i>
                        <span className="hidden md:inline-block">Loves</span>
                    </motion.button>
                </div>
                <div className="flex">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-light flex items-center text-white bg-dark hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full cursor-pointer"
                    >
                        <i className="fa-brands fa-github-square text-xl md:mr-2"></i>
                        <span className="hidden md:inline-block">Github</span>
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-light flex items-center text-white bg-primary hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-full cursor-pointer"
                    >
                        <i className="fa-solid fa-display md:mr-2"></i>
                        <span className="hidden md:inline-block">
                            Live View
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
