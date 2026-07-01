import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import API from "../services/api";
import HeroBackground from "../components/HeroBackground";
function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    branch: "",
    year: "",
    githubUsername: "",
    skills: "",
    lookingFor: "",
});

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

   const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        await API.post(
            "/auth/register",
            {
                ...form,
                skills: form.skills
                    .split(",")
                    .map(skill => skill.trim())
            }
        );

        toast.success(
            "Account created successfully 🚀"
        );

        navigate("/login");

    }

    catch (error) {

        console.log(error.response);

        toast.error(
            error.response?.data?.message ||
            error.message
        );

    }

};        

    return (

        <div
    className="
    min-h-screen
    relative
    bg-slate-950
    overflow-hidden
    flex
    items-center
    justify-center
    px-6
    "
>

    <HeroBackground />

<div className="relative z-10 w-full flex justify-center">

<motion.div
                initial={{
                    opacity: 0,
                    y: 40
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                className="
                w-full
                max-w-xl

                bg-slate-900/70
                backdrop-blur-2xl

                border
                border-slate-800

                rounded-[40px]

                p-10

                shadow-2xl
                "

            >

                <h1
                    className="
                    text-5xl
                    font-black
                    text-white
                    text-center
                    mb-4
                    "
                >
                    Join SkillSwap 🚀
                </h1>

                <p
                    className="
                    text-slate-400
                    text-center
                    mb-10
                    "
                >
                    Build, learn and grow with students.
                </p>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-2xl

                        bg-slate-800/70
                        border
                        border-slate-700

                        text-white

                        outline-none

                        focus:border-indigo-500
                        "
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-2xl

                        bg-slate-800/70
                        border
                        border-slate-700

                        text-white

                        outline-none

                        focus:border-indigo-500
                        "
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-2xl

                        bg-slate-800/70
                        border
                        border-slate-700

                        text-white

                        outline-none

                        focus:border-indigo-500
                        "
                    />

                    <input
                        name="college"
                        placeholder="College Name"
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-2xl

                        bg-slate-800/70
                        border
                        border-slate-700

                        text-white

                        outline-none

                        focus:border-indigo-500
                        "
                    />
<input
    name="branch"
    placeholder="Branch (CSE, AIML, ECE...)"
    onChange={handleChange}
    className="
    w-full
    p-4
    rounded-2xl
    bg-slate-800/70
    border
    border-slate-700
    text-white
    outline-none
    focus:border-indigo-500
    "
/>

<input
    name="year"
    placeholder="Year (1st Year, 2nd Year...)"
    onChange={handleChange}
    className="
    w-full
    p-4
    rounded-2xl
    bg-slate-800/70
    border
    border-slate-700
    text-white
    outline-none
    focus:border-indigo-500
    "
/>

<input
    name="githubUsername"
    placeholder="GitHub Username"
    onChange={handleChange}
    className="
    w-full
    p-4
    rounded-2xl
    bg-slate-800/70
    border
    border-slate-700
    text-white
    outline-none
    focus:border-indigo-500
    "
/>
                    <input
                        name="skills"
                        placeholder="React, Node, AI..."
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-2xl

                        bg-slate-800/70
                        border
                        border-slate-700

                        text-white

                        outline-none

                        focus:border-indigo-500
                        "
                    />
<input
    name="lookingFor"
    placeholder="Looking For (Frontend Dev, AI Teammates...)"
    onChange={handleChange}
    className="
    w-full
    p-4
    rounded-2xl
    bg-slate-800/70
    border
    border-slate-700
    text-white
    outline-none
    focus:border-indigo-500
    "
/>
                    <button
                        className="
                        w-full
                        py-4

                        rounded-2xl

                        bg-indigo-600

                        text-white
                        font-bold

                        hover:bg-indigo-500
                        hover:scale-[1.02]

                        transition-all
                        duration-300
                        "
                    >
                        Create Account
                    </button>

                </form>


                <p
                    className="
                    text-slate-400
                    text-center
                    mt-8
                    "
                >

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="
                        text-indigo-400
                        hover:text-indigo-300
                        "
                    >
                        Login
                    </Link>

                </p>

            </motion.div>
</div>
        </div>
      

    );

}

export default Register;