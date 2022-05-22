import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container, pulse } from "../utils/animation";
import Container from "../components/Container";

const AboutPage = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <div className="px-3">
                    <div>
                        <h2 className="text-3xl md:text-5xl z-20 font-bold drop-shadow-md w-full">
                            Brief Introduction
                        </h2>
                    </div>
                    <div className="w-[100%] mt-11 text-xl">
                        <div className="py-2">
                            Hi, my name is Gabriel Tomsic American citizen but
                            born and raised in Philippines. I got a degree in
                            Bachelor of Science in Information Technology,
                            graduated in 2009. Ever since my first in year in
                            college I been obsessed in development. I continued
                            my passion in development.
                        </div>
                        <div className="py-2">
                            But luckily got started working in designed as
                            training for six (6) months and got accepted as
                            regular worker at Maverick Communication in Metro
                            Manila Philippines. Even during that period, I
                            continue my passion in development. I studied PHP
                            HTML and CSS while on the after my day job.
                        </div>
                        <div className="py-2">
                            After that got relocated in 2010 in Baguio City and
                            tried to find my new adventure in my profession but
                            got no luck. Therefore, I tried my and expand my
                            horizon and got accepted a job offer in Saudi Arabia
                            as Secretary at ABB Company which is location in
                            Riyadh City. I always give everything and with that
                            I got promoted after 9 months as Administrator
                            Officer. Ever since then I didn’t stop my passion in
                            Development, I find the job opportunity at ABB as a
                            web master and got accepted.
                        </div>
                        <div className="py-2">
                            In 2016 I move in United States and got married to
                            my husband. Then I realized all the knowledge I have
                            been absolute, so I been enhancing my knowledge in
                            Wed Development and started learning Javascript or
                            Ecma Script. After that I continue to React and Node
                            Mysql and Postgresql, following the convention in
                            Resful API and MVC designed pattern as a full stack
                            developer. Then got hookup with SASS/SCSS Axios and
                            Jsonwebtoken, Bcryptjs for application security.
                        </div>
                        <div className="py-2">
                            After all those years of training and experience now
                            I am FULL STACK DEVELOPER using cutting edge
                            framework and always thrive to this fast-paced
                            environment.
                        </div>
                        <div className="py-2">
                            Now currently looking for a stable company where I
                            can share my knowledge and experience and continued
                            to grow with my company for the rest of my
                            professional carrier.
                        </div>
                        <div className="py-2">
                            Its only one step closer pressed this button bellow
                            and give me your offer and let’s help each other
                            grow and continued to thrive this fast-paced
                            environment.
                        </div>

                        <div className="mt-7 ml-11 mb-11 flex">
                            <Link to="/contact">
                                <motion.button
                                    variants={pulse}
                                    to="/contact"
                                    className="bg-primary-dark hover:bg-primary border-white font-bold py-2 px-7 mx-2 flex items-center duration-300 rounded-lg border-2 cursor-pointer"
                                >
                                    Contact Me
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default AboutPage;
