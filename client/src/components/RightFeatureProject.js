import React from "react";

const RightFeatureProject = ({ project }) => {
    return (
        <div className="relative flex flex-col">
            <h2 className="text-3xl text-left md:text-right text-primary md:text-5xl z-20 font-bold block lg:absolute drop-shadow-md w-full">
                {project.title}
            </h2>
            <div className="w-[100%] self-end mt-11  lg:right-0 lg:w-[50%] lg:mt-[100px] md:py-8 md:px-6 md:bg-primary-dark rounded-lg md:drop-shadow-md">
                <h3 className="text-xl md:text-3xl text-left text-gray font-bold md:text-light">
                    {project.description}
                </h3>
                <div className="mt-7 flex justify-start md:justify-end">
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
                className="w-full mt-11 md:mt-[100px] lg:left-0 lg:w-[70%] h-[300px] md:h-[600px] lg:h-[700px] rounded-md md:rounded-xl drop-shadow-md md:drop-shadow-xl"
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

export default RightFeatureProject;
