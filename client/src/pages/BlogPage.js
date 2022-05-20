import React from "react";
import { motion } from "framer-motion";
import { container } from "../utils/animation";
import Container from "../components/Container";

import awrow from "../assets/images/awrow.png";
import gstop from "../assets/images/gstop.png";
import BlogItem from "../components/BlogItem";

const posts = [
    {
        id: 1,
        title: "Awrow | Social Network",
        description: `Is a social network application I build where everyone has freedom to express themselves. Created in ReactJS Framework, Redux for Global State Management, JWT('Jsonwebtoken'), NodeJS, Express, Mysql, Tailwindcss, Nodemailer for sending email verification, BcryptJS for password hashing and more.`,
        images: [
            { id: 1, url: awrow },
            { id: 2, url: awrow },
            { id: 3, url: awrow },
            { id: 4, url: awrow },
            { id: 5, url: awrow },
        ],
        comments: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "John Doe" },
            { id: 3, name: "John Doe" },
            { id: 4, name: "John Doe" },
            { id: 5, name: "John Doe" },
        ],
        loves: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "John Doe" },
            { id: 3, name: "John Doe" },
        ],
    },
    {
        id: 2,
        title: "Gstop | E Commerce Application",
        description: `Example of E-Commerce application I build with paypal payment method Created in React Framework, JWT('Jsonwebtoken'), NodeJS, Express, Postgresql, Tailwindcss, BcryptJS for password hashing and more.`,
        images: [
            { id: 1, url: gstop },
            { id: 2, url: gstop },
            { id: 3, url: gstop },
        ],
        comments: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "John Doe" },
            { id: 3, name: "John Doe" },
        ],
        loves: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "John Doe" },
        ],
    },
];

const BlogPage = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <div className="px-3 md:px-6 lg:px-11 mb-11">
                    <h2 className="text-3xl mb-11 md:text-5xl z-20 font-bold drop-shadow-md w-full">
                        Personal Blogs
                    </h2>
                    {posts?.map((post) => (
                        <BlogItem key={post.id} post={post} />
                    ))}
                </div>
            </Container>
        </motion.div>
    );
};

export default BlogPage;
