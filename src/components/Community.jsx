function Community() {

    const communities = [

        {
            college: "Presidency University",
            members: "1.2K Students",
            icon: "🏫"
        },

        {
            college: "RV College",
            members: "2.5K Students",
            icon: "🚀"
        },

        {
            college: "MSRIT",
            members: "1.8K Students",
            icon: "💻"
        }

    ];

    return (

        <section
            id="community"
            className="
            py-40
            relative
            bg-transparent
            "
        >

            {/* Background Glow */}

            <div
                className="
                absolute
                left-0
                top-20
                w-[500px]
                h-[500px]
                bg-indigo-600/10
                rounded-full
                blur-[120px]
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
                    🏫 College Communities
                </h2>

                <p
                    className="
                    text-slate-400
                    text-center
                    text-lg
                    max-w-2xl
                    mx-auto
                    mb-20
                    "
                >
                    Join your college community,
                    connect with seniors,
                    find teammates,
                    and build amazing projects together.
                </p>

                <div
                    className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                    "
                >

                    {

                        communities.map((community) => (

                            <div

                                key={community.college}

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
                                hover:border-indigo-500/50
                                hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
                                "

                            >

                                <div className="text-6xl mb-6">

                                    {community.icon}

                                </div>

                                <h3
                                    className="
                                    text-white
                                    text-2xl
                                    font-bold
                                    "
                                >

                                    {community.college}

                                </h3>

                                <p className="text-slate-400 mt-4">

                                    {community.members}

                                </p>

                                <button
                                    className="
                                    mt-8

                                    px-6
                                    py-3

                                    bg-indigo-600
                                    hover:bg-indigo-500

                                    rounded-2xl
                                    text-white
                                    font-semibold

                                    transition-all
                                    duration-300

                                    hover:scale-105
                                    "
                                >

                                    Join Community

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Community;