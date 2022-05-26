import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { container } from "../utils/animation";
import Container from "../components/Container";
import image from "../assets/square.jpg";
import { useDispatch, useSelector } from "react-redux";
import { actionUserLogin } from "../store/actions/actionsMessage";
import Loading from "../components/Loading";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secret, setSecret] = React.useState("");
    const { loading, user, error } = useSelector((state) => state.login);
    React.useEffect(() => {
        if (user?.id) {
            navigate("/admin");
            setUsername("");
            setPassword("");
            setSecret("");
        }
        if (error) {
            console.log(error);
        }
    }, [user, error, navigate]);
    const loginUserHandler = (e) => {
        e.preventDefault();
        const data = { username, password, secret };
        dispatch(actionUserLogin(data));
    };
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <div className="px-3 mb-[20vh]">
                    <div className="mt-[5vh] flex flex-col items-center">
                        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white">
                            <img src={image} alt="Gabriel Tomsic" />
                        </div>
                        <h2 className="text-3xl md:text-5xl z-20 font-bold drop-shadow-md w-full py-6 text-center">
                            Administrator
                        </h2>
                        <form
                            onSubmit={loginUserHandler}
                            className="px-5 py-11 rounded-lg drop-shadow-md bg-dark border-2 border-white max-w-[500px] w-full"
                        >
                            {loading ? (
                                <div className="min-h-300 h-full flex justify-center items-center">
                                    <Loading />
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 my-2">
                                        <input
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            required
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 my-2">
                                        <input
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 my-2">
                                        <input
                                            value={secret}
                                            onChange={(e) =>
                                                setSecret(e.target.value)
                                            }
                                            required
                                            type="password"
                                            name="secret"
                                            placeholder="Secrect Key"
                                            className="p-3 rounded-md outline-none border-2 text-dark border-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 my-2">
                                        <button className="p-3 mt-4 bg-primary rounded-md font-bold">
                                            Login
                                        </button>
                                    </div>
                                    <div className="text-danger mt-4">
                                        {error &&
                                            `Username password or secret key don't match please try again.`}
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default Login;
