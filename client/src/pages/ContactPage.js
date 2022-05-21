import React from "react";
import { motion } from "framer-motion";

import { container } from "../utils/animation";
import Container from "../components/Container";

const ContactPage = () => {
    const [name, setName] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const messageSubmitHandler = (e) => {
        e.preventDefault();
        console.log({ name, company, email, message });
    };
    const cancelButtonHandler = () => {
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
    };
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
                        Cantact Me
                    </h2>
                    <div className="mt-11">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <div className=" py-3">
                                    <h4 className="text-xl font-bold">
                                        Attention!
                                    </h4>
                                </div>
                                <div className="description py-2">
                                    Not interested in any staffing company.
                                </div>
                            </div>
                            <div>
                                <div className="py-3">
                                    <h4 className="text-xl font-bold">
                                        Message Form
                                    </h4>
                                </div>
                                <form
                                    onSubmit={messageSubmitHandler}
                                    className="w-full"
                                >
                                    <div className="grid grid-cols-1 my-2">
                                        <input
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 my-2">
                                        <input
                                            value={company}
                                            onChange={(e) =>
                                                setCompany(e.target.value)
                                            }
                                            type="text"
                                            name="company"
                                            placeholder="Company Name"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 my-2">
                                        <input
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 my-2">
                                        <textarea
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            rows="7"
                                            type="text"
                                            name="message"
                                            placeholder="Message"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 my-2 gap-2">
                                        <button
                                            type="submit"
                                            className="py-2 bg-secondary hover:bg-primary duration-300 rounded-md border-2 border-white text-xl font-bold"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            onClick={cancelButtonHandler}
                                            type="button"
                                            className="py-2 bg-dark hover:bg-secondary duration-300 rounded-md border-2 border-white text-xl font-bold"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default ContactPage;
