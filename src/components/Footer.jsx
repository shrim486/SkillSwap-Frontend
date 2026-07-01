function Footer() {
    return (

        <footer
            className="
            py-20
            relative
            border-t
            border-white/10
            bg-transparent
            "
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* BRAND */}

                    <div>

                        <h2 className="text-3xl font-bold text-white mb-4">
                            SkillSwap 🚀
                        </h2>

                        <p className="text-slate-400 leading-7">
                            A platform where students connect,
                            build projects, learn from seniors,
                            and grow together.
                        </p>

                    </div>


                    {/* QUICK LINKS */}

                    <div>

                        <h3 className="text-white font-bold mb-6">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-4 text-slate-400">

                            <a href="#features" className="hover:text-white transition">
                                Features
                            </a>

                            <a href="#community" className="hover:text-white transition">
                                Community
                            </a>

                            <a href="#projects" className="hover:text-white transition">
                                Projects
                            </a>

                        </div>

                    </div>


                    {/* FUTURE SOCIALS */}

                    <div>

                        <h3 className="text-white font-bold mb-6">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <button
                                className="
                                px-4
                                py-3
                                rounded-2xl
                                bg-slate-900/70
                                border
                                border-slate-800
                                text-white

                                hover:border-indigo-500
                                hover:-translate-y-1

                                transition-all
                                duration-300
                                "
                            >
                                🐙 GitHub
                            </button>

                            <button
                                className="
                                px-4
                                py-3
                                rounded-2xl
                                bg-slate-900/70
                                border
                                border-slate-800
                                text-white

                                hover:border-blue-500
                                hover:-translate-y-1

                                transition-all
                                duration-300
                                "
                            >
                                💼 LinkedIn
                            </button>

                        </div>

                    </div>

                </div>


                <div
                    className="
                    mt-16
                    pt-8
                    border-t
                    border-white/10
                    text-center
                    text-slate-500
                    "
                >

                    © 2026 SkillSwap. Built by students, for students.

                </div>

            </div>

        </footer>

    );
}

export default Footer;