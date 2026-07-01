import HeroBackground from "../components/HeroBackground";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Explore() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const res = await API.get("/users");

                console.log(res.data);

                setStudents(res.data);

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchUsers();

    }, []);

    return (

        <div
            className="
            relative
            min-h-screen
            bg-slate-950
            overflow-hidden
            "
        >

            <HeroBackground />

            <div className="relative z-10 pt-32 px-6">

                <div className="max-w-7xl mx-auto">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="
                        text-5xl
                        font-bold
                        text-white
                        mb-12
                        text-center
                        "
                    >
                        🚀 Explore Builders
                    </motion.h1>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {students.map((student, index) => (

                            <motion.div
                                key={student._id}
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    delay: index * 0.15
                                }}
                                className="
                                bg-slate-900/70
                                backdrop-blur-xl
                                border
                                border-slate-800
                                rounded-3xl
                                p-8
                                hover:-translate-y-3
                                hover:border-indigo-500
                                transition-all
                                duration-300
                                "
                            >

                                <div className="text-6xl mb-4">
                                    👨‍💻
                                </div>

                                <h2 className="text-3xl text-white font-bold">
                                    {student.name}
                                </h2>

                                <p className="text-indigo-400 mt-3">
                                    🏫 {student.college || "Not Added"}
                                </p>

                                <p className="text-slate-400 mt-2">
                                    💻 {student.branch || "Not Added"}
                                </p>

                                <p className="text-slate-400 mt-1">
                                    📅 {student.year || "Not Added"}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">

                                    {student.skills?.map((skill) => (

                                        <span
                                            key={skill}
                                            className="
                                            bg-indigo-600/80
                                            px-4
                                            py-2
                                            rounded-xl
                                            text-white
                                            text-sm
                                            "
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                                <p className="text-indigo-300 mt-4">
                                    🔗 GitHub: {student.githubUsername || "Not Added"}
                                </p>

                                <p className="text-violet-300 mt-2">
                                    🤝 Looking For: {student.lookingFor || "Open to Collaborate"}
                                </p>

                                <Link
                                    to={`/profile/${student._id}`}
                                    className="
                                    mt-8
                                    block
                                    w-full
                                    text-center
                                    bg-gradient-to-r
                                    from-indigo-600
                                    to-violet-600
                                    hover:scale-105
                                    py-3
                                    rounded-2xl
                                    text-white
                                    font-semibold
                                    transition
                                    "
                                >
                                    View Profile
                                </Link>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Explore;