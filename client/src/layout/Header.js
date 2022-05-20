import React from "react";
import Container from "../components/Container";
import Logo from "./Logo";
import Navbar from "./Navbar";

import { Link } from "react-router-dom";

import imageLogo from "../assets/square.jpg";

const Header = ({ menuIsOpen, setMenuIsOpen }) => {
    return (
        <div className="z-40 fixed h-[70px] bg-primary-dark bg-opacity-90 drop-shadow-md w-full top-0 left-0 right-0 flex items-center px-5 md:px-5">
            <Container>
                <div className="flex flex-row justify-between">
                    <Link to="/" className="rounded-full visible lg:hidden ">
                        <div
                            className="h-10 w-10 rounded-full border-2 border-white"
                            style={{
                                backgroundImage: `url(${imageLogo})`,
                                backgroundPosition: "top",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </Link>
                    <Logo />
                    <Navbar
                        setMenuIsOpen={() => setMenuIsOpen(!menuIsOpen)}
                        menuIsOpen={menuIsOpen}
                    />
                </div>
            </Container>
        </div>
    );
};

export default Header;
