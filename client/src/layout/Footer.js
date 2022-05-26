import React from "react";
import Container from "../components/Container";

const socials = [
    { name: "awrow", link: "https://www.awrow.com" },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/gabriel-tomsic-0013561b3",
    },
    { name: "github", link: "https://github.com/gtomsic" },
    {
        name: "youtube",
        link: "https://www.youtube.com/channel/UCFa4uWce7eLyJNzgYKGSG9A",
    },
];
const resources = [
    {
        name: "javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    },
    { name: "react", link: "https://reactjs.org/" },
    {
        name: "redux",
        link: "https://redux.js.org/",
    },
    {
        name: "node",
        link: "https://nodejs.org/en/",
    },
    { name: "mysql", link: "https://www.mysql.com/" },
    {
        name: "sequelize",
        link: "https://sequelize.org/",
    },
    {
        name: "postgresql",
        link: "https://www.postgresql.org/",
    },
    {
        name: "tailwindcss",
        link: "https://tailwindcss.com/",
    },
];

const Footer = () => {
    return (
        <div className="footer min-h-[40vh] bg-dark text-white pb-11 px-7 w-full">
            <Container>
                <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left lg:text-center">
                    <div>
                        <h3 className="text-2xl  pt-11">Social Links</h3>
                        <div className="inline-block">
                            <ul className="mt-3 text-gray text-left">
                                {socials.map((social) => (
                                    <li key={social.name} className="py-1">
                                        <a
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl  pt-11">Resources</h3>
                        <div className="inline-block">
                            <ul className="mt-3 text-gray text-left">
                                {resources.map((social) => (
                                    <li key={social.name} className="py-1">
                                        <a
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl  pt-11">&copy; Copy Rights</h3>
                        <div className="inline-block">
                            <ul className="mt-3 text-gray text-left">
                                <li>www.gabrieltomsic.com</li>
                                <li>Dev By: Gabriel Tomsic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
