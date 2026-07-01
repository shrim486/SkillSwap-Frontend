

function Projects() {

    const projects = [

        {
            icon: "🚀",
            title: "SkillSwap Campus",
            tech: "MERN • Socket.IO • AI",
            author: "Shrim",
            description:
                "A student platform to connect, collaborate, and build amazing projects together."
        },

        {
            icon: "🤖",
            title: "AI Resume Builder",
            tech: "React • OpenAI API",
            author: "Rahul",
            description:
                "Generate professional resumes using AI assistance and modern templates."
        },

        {
            icon: "📚",
            title: "StudyBuddy",
            tech: "Node.js • MongoDB",
            author: "Priya",
            description:
                "Find study partners, create groups, and track your learning goals."
        }

    ];

    return (

        <section
            className="
            py-40
            relative
            bg-transparent
            "
        >

            {/* BACKGROUND GLOW */}

            <div
                className="
                absolute
                top-20
                right-0
                w-[600px]
                h-[600px]
                bg-blue-500/10
                rounded-full
                blur-[140px]
                "
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <h2
                    className="
                    text-5xl
                    font-bold
                    text-center
                    text-white
                    mb-6
                    "
                >
                    🔥 Trending Student Projects
                </h2>

                <p
                    className="
                    text-slate-400
                    text-center
                    max-w-2xl
                    mx-auto
                    mb-20
                    text-lg
                    "
                >
                    Discover what students are building,
                    collaborate on ideas, and showcase your own work.
                </p>

                <div
                    className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                    "
                >

                    {projects.map((project) => (

                        <div
                            key={project.title}
                            className="
                            bg-slate-900/70
                            backdrop-blur-xl
                            border
                            border-slate-800

                            rounded-3xl
                            p-8

                            transition-all
                            duration-300

                            hover:-translate-y-4
                            hover:border-blue-500/40
                            hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
                            "
                        >

                            <div className="text-5xl mb-6">
                                {project.icon}
                            </div>

                            <h3
                                className="
                                text-white
                                text-2xl
                                font-bold
                                "
                            >
                                {project.title}
                            </h3>

                            <p className="text-blue-400 mt-3">
                                {project.tech}
                            </p>

                            <p className="text-slate-500 mt-2">
                                By {project.author}
                            </p>

                            <p
                                className="
                                text-slate-400
                                mt-6
                                leading-7
                                "
                            >
                                {project.description}
                            </p>

                            <div className="flex gap-4 mt-8">

                                <button
                                    className="
                                    flex
                                    items-center
                                    gap-2

                                    px-4
                                    py-2

                                    rounded-xl

                                    bg-slate-800
                                    text-white

                                    hover:bg-slate-700
                                    transition
                                    "
                                >
                                    🐙
                                    GitHub
                                </button>

                                <button
                                    className="
                                    flex
                                    items-center
                                    gap-2

                                    px-4
                                    py-2

                                    rounded-xl

                                    bg-blue-600
                                    text-white

                                    hover:bg-blue-500
                                    transition
                                    "
                                >
                                    🔗
                                    View
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Projects;