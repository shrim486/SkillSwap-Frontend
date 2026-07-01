import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Hero() {
    return (

        <section
            className="
            min-h-screen
            pt-32
            flex
            items-center
            relative
            overflow-hidden
            "
        >

            

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                >

                    <p className="text-indigo-400 font-semibold mb-4">
                        Student Community Platform
                    </p>

                    <h1 className="text-7xl font-black text-white leading-tight mb-8">

                        The Student Network
                        <br />

                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            For Builders.
                        </span>

                    </h1>

                    <p className="text-slate-400 text-xl mb-10 leading-8">

                        Build projects, discover teammates,
                        learn from seniors, showcase your work,
                        and grow inside a community made by students,
                        for students.

                    </p>

                    <div className="flex gap-4">

                        <Link
                            to="/explore"
                            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-2xl text-white font-semibold transition"
                        >
                            Explore Community
                        </Link>

                        <Link
                            to="/register"
                            className="border border-slate-700 px-8 py-4 rounded-2xl text-white hover:bg-slate-900 transition"
                        >
                            Join SkillSwap
                        </Link>

                    </div>

                </motion.div>


                {/* RIGHT SIDE FLOATING CARDS */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hidden lg:flex justify-center"
                >

                    <div className="relative w-[500px] h-[500px]">

                        {/* CENTER GLOW */}

                        <div
                            className="
                            absolute
                            w-96
                            h-96
                            bg-indigo-500/20
                            rounded-full
                            blur-[120px]
                            top-20
                            left-20
                            "
                        />

                        {/* PROJECT CARD */}

                        <motion.div
                            animate={{
                                y: [0, -15, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity
                            }}
                            className="
                            absolute
                            top-10
                            left-10
                            bg-slate-900/80
                            backdrop-blur-xl
                            border
                            border-slate-800
                            p-6
                            rounded-3xl
                            shadow-2xl
                            w-72
                            "
                        >

                            <h3 className="text-white text-xl font-bold">
                                🚀 SkillSwap Campus
                            </h3>

                            <p className="text-slate-400 mt-3">
                                MERN + Socket.IO + AI
                            </p>

                        </motion.div>


                        {/* TEAM CARD */}

                        <motion.div
                            animate={{
                                y: [0, 15, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity
                            }}
                            className="
                            absolute
                            right-0
                            top-48
                            bg-slate-900/80
                            backdrop-blur-xl
                            border
                            border-slate-800
                            p-6
                            rounded-3xl
                            shadow-2xl
                            w-64
                            "
                        >

                            <h3 className="text-white font-bold">
                                🤝 Looking For
                            </h3>

                            <p className="text-slate-400 mt-3">
                                Frontend Developer
                            </p>

                        </motion.div>


                        {/* STUDENT CARD */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity
                            }}
                            className="
                            absolute
                            bottom-10
                            left-24
                            bg-slate-900/80
                            backdrop-blur-xl
                            border
                            border-slate-800
                            p-6
                            rounded-3xl
                            shadow-2xl
                            w-72
                            "
                        >

                            <h3 className="text-white font-bold">
                                👨‍💻 Rahul
                            </h3>

                            <p className="text-slate-400 mt-3">
                                React • Node • AI
                            </p>

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>

    );
}

export default Hero;