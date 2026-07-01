function Features() {

    const features = [

        {
            icon: "🚀",
            title: "Showcase Projects",
            text: "Share your work and inspire other students."
        },

        {
            icon: "🤝",
            title: "Find Teammates",
            text: "Meet students who love building cool things."
        },

        {
            icon: "💬",
            title: "Real-Time Chat",
            text: "Collaborate and communicate instantly."
        },

        {
            icon: "🏫",
            title: "College Communities",
            text: "Connect with seniors and freshers alike."
        }

    ];

    return (

        <section
            id="features"
            className="
            py-40
            relative
            bg-transparent
            "
        >

            {/* BACKGROUND ORBITS */}

            <div
                style={{
                    position: "absolute",
                    top: "100px",
                    left: "50%",
                    width: "900px",
                    height: "400px",
                    transform: "translateX(-50%) rotate(8deg)",
                    border: "2px solid rgba(168,85,247,0.15)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "180px",
                    left: "50%",
                    width: "700px",
                    height: "300px",
                    transform: "translateX(-50%) rotate(8deg)",
                    border: "2px solid rgba(96,165,250,0.15)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />

            {/* PURPLE GLOW */}

            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "600px",
                    height: "600px",
                    background: "rgba(147,51,234,0.12)",
                    borderRadius: "50%",
                    filter: "blur(120px)",
                    pointerEvents: "none",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <h2
                    className="
                    text-5xl
                    text-white
                    font-bold
                    text-center
                    mb-20
                    "
                >
                    Why SkillSwap?
                </h2>

                <div
                    className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-8
                    "
                >

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="
                            bg-slate-900/70
                            backdrop-blur-xl
                            border
                            border-slate-800

                            p-8
                            rounded-3xl

                            transition-all
                            duration-300

                            hover:-translate-y-4
                            hover:scale-105
                            hover:border-purple-500/50
                            hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                            "
                        >

                            <div className="text-5xl">
                                {feature.icon}
                            </div>

                            <h3
                                className="
                                text-white
                                text-2xl
                                font-bold
                                mt-6
                                "
                            >
                                {feature.title}
                            </h3>

                            <p
                                className="
                                text-slate-400
                                mt-4
                                leading-7
                                "
                            >
                                {feature.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Features;