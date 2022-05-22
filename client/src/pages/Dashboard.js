import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container } from "../utils/animation";
import Container from "../components/Container";

const Dashboard = () => {
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
                            Dashboard
                        </h2>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default Dashboard;
