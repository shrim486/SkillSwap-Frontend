import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post(
                "/auth/login",
                {
                    email,
                    password,
                }
            );

localStorage.setItem("token", res.data.token);
localStorage.setItem("userId", res.data._id);
localStorage.setItem("userName", res.data.name);
            toast.success(
                "Welcome back!"
            );

            navigate("/dashboard");

        }
        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl"
            >

                <h1 className="text-4xl font-bold text-white text-center mb-2">
                    SkillSwap 🚀
                </h1>

                <p className="text-slate-400 text-center mb-8">
                    Learn, Teach, Grow Together
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full bg-slate-800 text-white p-4 rounded-xl mb-4 border border-slate-700 outline-none focus:border-indigo-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full bg-slate-800 text-white p-4 rounded-xl mb-6 border border-slate-700 outline-none focus:border-indigo-500"
                    />

                    <button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-4 rounded-xl text-white font-semibold"
                    >
                        Login
                    </button>

                </form>

            </motion.div>

        </div>

    );

}

export default Login;