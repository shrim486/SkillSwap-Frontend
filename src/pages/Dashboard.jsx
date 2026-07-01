import { motion } from "framer-motion";
import HeroBackground from "../components/HeroBackground";
import { useEffect,useState } from "react";
import AddProjectModal from "../components/AddProjectModal";
import API from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Dashboard() {
    

      
const [showModal,setShowModal]=useState(false);
const [projects,setProjects]=useState([]);
const userName =
    localStorage.getItem("userName");
useEffect(() => {

    const fetchProjects = async () => {


        try {

            const token =
                localStorage.getItem("token");

            const res = await API.get(

                "/projects/my-projects",

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            setProjects(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    fetchProjects();

}, []);
return(

    <div
        className="
        relative
        min-h-screen
        bg-slate-950
        overflow-hidden
        "
    >

        <HeroBackground />

        <Navbar />

        <div className="relative z-10 pt-32 px-6"></div>

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                    bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-800
                    rounded-3xl
                    p-8
                    mb-10
                    "
                >

                    <h1 className="text-5xl font-bold text-white mb-4">
                        Welcome Back, {userName} 🚀
                    </h1>
<div className="flex gap-4 mt-4">

    <Link
        to="/"
        className="
        bg-slate-700
        hover:bg-slate-600
        px-6
        py-3
        rounded-2xl
        text-white
        "
    >
        🏠 Home
    </Link>

    <Link
        to="/edit-profile"
        className="
        bg-violet-600
        hover:bg-violet-500
        px-6
        py-3
        rounded-2xl
        text-white
        "
    >
        ✏️ Edit Profile
    </Link>

</div>
                    <p className="text-slate-400 text-lg">
                        Build projects, connect with students,
                        and grow together.
                    </p>

                </motion.div>


                {/* MAIN GRID */}

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT SIDE */}

                    <div className="lg:col-span-2 space-y-8">

                        {/* MY PROJECTS */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="
                            bg-slate-900/70
                            backdrop-blur-xl
                            border
                            border-slate-800
                            rounded-3xl
                            p-8
                            "
                        >

                            <div className="flex justify-between items-center mb-8">

                                <h2 className="text-3xl font-bold text-white">
                                    🚀 My Projects
                                </h2>

                                <button

    onClick={() => setShowModal(true)}

    className="
    bg-indigo-600
    hover:bg-indigo-500
    px-6
    py-3
    rounded-2xl
    text-white
    transition
    "

>

    + Add Project

</button>

                            </div>


                            

                          {
    projects.map((project) => (

        <div

            key={project._id}

            className="
            bg-slate-800/50
            border
            border-slate-700
            p-6
            rounded-2xl
            mb-6
            "

        >

            <h3
                className="
                text-2xl
                text-white
                font-bold
                "
            >

                🚀 {project.title}

            </h3>

            <p className="text-indigo-400 mt-2">

                {project.techStack.join(" • ")}

            </p>

            <p className="text-slate-400 mt-4">

                {project.description}

            </p>

        </div>

    ))
}

                        </motion.div>


                        {/* SUGGESTED BUILDERS */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="
                            bg-slate-900/70
                            backdrop-blur-xl
                            border
                            border-slate-800
                            rounded-3xl
                            p-8
                            "
                        >

                            <h2 className="text-3xl font-bold text-white mb-8">
                                🤝 Suggested Builders
                            </h2>


                            <div className="grid md:grid-cols-2 gap-6">

                                <div
                                    className="
                                    bg-slate-800/50
                                    p-6
                                    rounded-2xl
                                    "
                                >

                                    <h3 className="text-white text-xl font-bold">
                                        👨‍💻 Rahul
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        React • Node • AI
                                    </p>

                                </div>


                                <div
                                    className="
                                    bg-slate-800/50
                                    p-6
                                    rounded-2xl
                                    "
                                >

                                    <h3 className="text-white text-xl font-bold">
                                        👩‍💻 Priya
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        Python • ML • Data Science
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="space-y-8">

                        {/* MY SKILLS */}

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="
                            bg-slate-900/70
                            backdrop-blur-xl
                            border
                            border-slate-800
                            rounded-3xl
                            p-8
                            "
                        >

                            <h2 className="text-2xl text-white font-bold mb-6">
                                🛠 My Skills
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                <span className="bg-indigo-600 px-4 py-2 rounded-xl text-white">
                                    React
                                </span>

                                <span className="bg-violet-600 px-4 py-2 rounded-xl text-white">
                                    Node.js
                                </span>

                                <span className="bg-blue-600 px-4 py-2 rounded-xl text-white">
                                    AI
                                </span>

                            </div>

                        </motion.div>


                        {/* UPCOMING SESSIONS */}

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="
                            bg-slate-900/70
                            backdrop-blur-xl
                            border
                            border-slate-800
                            rounded-3xl
                            p-8
                            "
                        >

                            <h2 className="text-2xl text-white font-bold mb-6">
                                📅 Upcoming Sessions
                            </h2>

                            <div
                                className="
                                bg-slate-800/50
                                p-5
                                rounded-2xl
                                "
                            >

                                <h3 className="text-white font-bold">
                                    React Basics
                                </h3>

                                <p className="text-slate-400 mt-2">
                                    Tomorrow • 6:00 PM
                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

           {
    showModal && (

        <AddProjectModal
            closeModal={() =>
                setShowModal(false)
            }
        />

    )
}

            </div>

        </div>

    );

}

export default Dashboard;

