import React from "react";

import { motion } from "framer-motion";
import { pulse, zoomIn } from "../utils/animation";

const BlogItem = ({ post }) => {
    return (
        <motion.div variants={zoomIn} className="relative">
            <div className="title border-b border-b-light bg-primary bg-opacity-30 px-3 py-3">
                <h4 className="text-xl font-bold">{post.title}</h4>
            </div>
            <div className="description border-b border-b-light">
                <h5 className="text-lg font-bold">Description</h5>
                <div className="description py-2">{post.description}</div>
                <div className="flex my-2">
                    <button className="border border-light flex items-center text-white bg-warning hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-md cursor-pointer">
                        <i className="fa-solid fa-pen-to-square mr-2"></i>Edit
                    </button>
                    <button className="border border-light flex items-center text-white bg-danger hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-md cursor-pointer">
                        <i className="fa-solid fa-trash mr-2"></i> Delete
                    </button>
                </div>
            </div>
            <div className="images border-b border-b-light">
                <h5 className="text-lg font-bold">Images</h5>
                <div className="images py-2 grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {post?.images?.map((image) => (
                        <div
                            key={image.id}
                            className="flex justify-center overflow-hidden"
                        >
                            <img
                                src={image.url}
                                alt="awrow"
                                className="w-100%"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex p-3">
                <div className="flex">
                    <button className="border border-light flex items-center text-white bg-primary hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-md">
                        {post.comments.length}
                        <i className="fa-solid fa-comment-dots ml-2 md:mx-2"></i>
                        Comments
                    </button>
                    <motion.button
                        variants={pulse}
                        className="border border-light flex items-center text-white bg-danger hover:bg-secondary duration-300 p-1 px-3 m-2 rounded-md"
                    >
                        {post.loves.length}
                        <i className="fa-solid fa-heart ml-2 md:mx-2"></i>
                        Loves
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogItem;
