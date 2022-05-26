import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { container } from "../utils/animation";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user } = useSelector((state) => state.login);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!user?.id) {
            navigate("/login");
        }
    }, [user, navigate]);
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <div className="px-3 flex flex-col">
                    <div>
                        <h2 className="text-3xl md:text-5xl z-20 font-bold drop-shadow-md w-full">
                            Dashboard
                        </h2>
                    </div>
                    <div className="flex mt-11">
                        <div className="w-full max-w-[300px] text-xl">
                            <div className="md:fixed top-[85px]">
                                <h5>{`${user?.firstName} ${user?.lastName}`}</h5>
                            </div>
                        </div>
                        <div className="w-full">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default Dashboard;
