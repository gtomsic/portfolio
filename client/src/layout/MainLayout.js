import React from "react";
import { Outlet } from "react-router-dom";
import RightDrawer from "./RightDrawer";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    return (
        <div>
            {menuIsOpen && (
                <RightDrawer
                    setIsOpen={() => setMenuIsOpen(!menuIsOpen)}
                    isOpen={menuIsOpen}
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
