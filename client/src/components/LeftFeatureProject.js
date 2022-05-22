import React from "react";

const LeftFeatureProject = ({ project }) => {
    return (
        <div className="relative flex flex-col text-left">
            <h2 className="text-3xl md:text-5xl z-20 font-bold drop-shadow-md w-full">
                {project.title}
            </h2>
            <div className="w-[100%] mt-11 lg:w-[50%] lg:mt-[100px] z-20 md:py-8 md:px-6 md:bg-primary-dark rounded-lg drop-shadow-md">
                <h3 className="text-xl md:text-3xl font-bold ">
                    {project.description}
                </h3>
                <div className="mt-7 flex">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-dark hover:bg-primary border-white font-bold py-2 px-7 mx-2 flex items-center duration-300 rounded-md border-2 cursor-pointer"
                    >
                        <i className="fa-brands fa-github-square mr-2 text-2xl"></i>
                        Github
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-primary-dark hover:bg-primary border-white font-bold py-2 px-7 mx-2 flex items-center duration-300 rounded-md border-2 cursor-pointer"
                    >
                        <i className="fa-solid fa-code mr-2 text-2xl"></i>
                        View
                    </a>
                </div>
            </div>
            <div
                className="w-full  md:self-end mt-11 lg:w-[70%] lg:mt-[100px] h-[300px] md:h-[600px] lg:max-h-[700px] rounded-md md:rounded-xl drop-shadow-md md:drop-shadow-xl"
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </div>
    );
};

export default LeftFeatureProject;
