import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Dashboard />}>
                        <Route path="/admin" element={<DashboardHome />} />
                    </Route>
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default App;
