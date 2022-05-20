import React from "react";
import { Outlet } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    return (
        <div>
            {menuIsOpen && (
                <MobileMenu
                    setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
                    menuIsOpen={menuIsOpen}
                />
            )}
            <Header
                setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
                menuIsOpen={menuIsOpen}
            />
            <main className="min-h-[60vh] pt-[100px] w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
