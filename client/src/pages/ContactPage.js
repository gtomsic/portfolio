import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { container } from "../utils/animation";
import Container from "../components/Container";

import { actionSendMessage } from "../store/actions/actionsMessage";
import MessageAnimation from "../components/MessageAnimation";
import Modal from "../components/Modal";

const ContactPage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const dispatch = useDispatch();
    const {
        loading,
        message: send,
        error,
    } = useSelector((state) => state.message);

    React.useEffect(() => {
        if (send?.name) {
            cancelButtonHandler();
        }
        if (loading) {
            setIsOpen(true);
        }
    }, [send, loading]);

    const messageSubmitHandler = (e) => {
        e.preventDefault();
        const data = { name, company, email, message };
        dispatch(actionSendMessage(data));
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
                                {/* Message Animation */}
                                {loading ? (
                                    <MessageAnimation color="text-white" />
                                ) : error ? (
                                    <div>Message failed try again later</div>
                                ) : (
                                    send?.name && (
                                        <div className="my-11 p-5 bg-white text-dark drop-shadow-lg mr-0 md:mr-3 rounded-lg md:rounded-2xl">
                                            <h3 className="text-2xl">
                                                Hi {send?.name}
                                            </h3>
                                            <div className="text-xl">
                                                Your message is successfully
                                                send.
                                            </div>
                                            <p className="text-xl">
                                                I will get back to you soon as
                                                possible.
                                            </p>
                                            <div className="mt-8">
                                                <div className="text-xl">
                                                    <p>Best regards</p>
                                                    <p>Gabriel Tomsic</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
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
                                            required
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
                                            required
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
                                            required
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
                                            required
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
                                            disabled={loading}
                                            type="submit"
                                            className="py-2 bg-primary hover:bg-primary-dark duration-300 rounded-md border-2 border-white text-xl font-bold"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            disabled={loading}
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
            <Modal
                isOpen={isOpen}
                setIsOpen={!loading ? setIsOpen : () => null}
            >
                {loading ? (
                    <MessageAnimation color="text-dark drop-shadow-md" />
                ) : error ? (
                    <div>Message failed try again later</div>
                ) : (
                    send?.name && (
                        <div className="text-dark drop-shadow-md">
                            <h3 className="text-2xl">Hi {send?.name}</h3>
                            <div className="text-xl">
                                Your message is successfully send.
                            </div>
                            <p className="text-xl">
                                I will get back to you soon as possible.
                            </p>
                            <div className="mt-8">
                                <div className="text-xl">
                                    <p>Best regards</p>
                                    <p>Gabriel Tomsic</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
                {!loading && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(!isOpen);
                        }}
                        className="rounded-md drop-shadow-md py-1 px-8 mt-8 flex justify-center items-center bg-primary text-white"
                    >
                        Okay
                    </button>
                )}
            </Modal>
        </motion.div>
    );
};

export default ContactPage;
