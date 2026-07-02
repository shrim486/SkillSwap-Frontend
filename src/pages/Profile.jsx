import HeroBackground from "../components/HeroBackground";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import CollaborateModal from "../components/CollaborateModal";

function Profile() {

    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] =
        useState(false);

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const res =
                    await API.get(
                        `/users/${id}`
                    );

                setUser(res.data);

                const projectRes =
                    await API.get(
                        `/projects/user/${id}`
                    );

                setProjects(
                    projectRes.data
                );

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchUser();

    }, [id]);


    if (!user) {

        return (

            <div className="text-white p-20">

                Loading...

            </div>

        );

    }


    return (

        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            <HeroBackground />

            <div className="relative z-10 pt-28 px-4 md:px-6">

                <div className="max-w-5xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10">

                    {/* TOP SECTION */}

                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

                        {

                            user.profileImage ? (

                                <img

                                    src={user.profileImage}

                                    alt={user.name}

                                    className="
                                    w-40
                                    h-40
                                    rounded-full
                                    object-cover
                                    border-4
                                    border-indigo-600
                                    "

                                />

                            ) : (

                                <div
                                    className="
                                    w-40
                                    h-40
                                    rounded-full
                                    bg-indigo-600
                                    flex
                                    items-center
                                    justify-center
                                    text-6xl
                                    "
                                >
                                    👨‍💻
                                </div>

                            )

                        }


                        <div className="flex-1">

                            <h1 className="text-4xl md:text-5xl font-bold text-white">

                                {user.name}

                            </h1>


                            <p className="text-slate-400 mt-4">

                                {user.bio ||
                                    "No bio added yet."}

                            </p>


                            <div className="mt-6 space-y-2">

                                <p className="text-indigo-300">

                                    🏫 {user.college || "Not Added"}

                                </p>

                                <p className="text-slate-300">

                                    💻 {user.branch || "Not Added"}

                                </p>

                                <p className="text-slate-300">

                                    📅 {user.year || "Not Added"}

                                </p>

                            </div>


                            <div className="flex flex-wrap gap-4 mt-8">

                                {

                                    user.githubUsername && (

                                        <a

                                            href={`https://github.com/${user.githubUsername}`}

                                            target="_blank"

                                            className="
                                            bg-slate-800
                                            hover:bg-slate-700
                                            px-5
                                            py-3
                                            rounded-2xl
                                            text-white
                                            transition
                                            "

                                        >

                                            🐙 GitHub

                                        </a>

                                    )

                                }


                                {

                                    user.linkedinUsername && (

                                        <a

                                            href={`https://linkedin.com/in/${user.linkedinUsername}`}

                                            target="_blank"

                                            className="
                                            bg-blue-600
                                            hover:bg-blue-500
                                            px-5
                                            py-3
                                            rounded-2xl
                                            text-white
                                            transition
                                            "

                                        >

                                            💼 LinkedIn

                                        </a>

                                    )

                                }


                                {

                                    localStorage.getItem(
                                        "userId"
                                    ) !== user._id && (

                                        <button

                                            onClick={() =>
                                                setShowModal(true)
                                            }

                                            className="
                                            bg-indigo-600
                                            hover:bg-indigo-500
                                            px-5
                                            py-3
                                            rounded-2xl
                                            text-white
                                            transition
                                            "

                                        >

                                            🤝 Collaborate

                                        </button>

                                    )

                                }

                            </div>

                        </div>

                    </div>


                    {/* SKILLS */}

                    <div className="mt-12">

                        <h2 className="text-3xl font-bold text-white mb-6">

                            🚀 Skills

                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {

                                user.skills?.map((skill) => (

                                    <span

                                        key={skill}

                                        className="
                                        bg-indigo-600
                                        px-4
                                        py-2
                                        rounded-xl
                                        text-white
                                        "

                                    >

                                        {skill}

                                    </span>

                                ))

                            }

                        </div>

                    </div>


                    {/* LOOKING FOR */}

                    <div className="mt-10">

                        <h2 className="text-3xl font-bold text-white mb-4">

                            🤝 Looking For

                        </h2>

                        <p className="text-slate-300">

                            {

                                user.lookingFor ||

                                "Open To Collaborate"

                            }

                        </p>

                    </div>


                    {/* PROJECTS */}

                    <div className="mt-14">

                        <h2 className="text-3xl font-bold text-white mb-8">

                            🚀 Projects

                        </h2>

                        {

                            projects.length === 0 ? (

                                <p className="text-slate-400">

                                    No projects added yet.

                                </p>

                            ) : (

                                <div className="grid md:grid-cols-2 gap-6">

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
                                                "

                                            >

                                                <h3 className="text-2xl font-bold text-white">

                                                    {project.title}

                                                </h3>
<div className="flex gap-3 mt-4 flex-wrap">

    {

        project.githubLink && (

            <a

                href={project.githubLink}

                target="_blank"

                rel="noreferrer"

                className="
                bg-slate-700
                px-4
                py-2
                rounded-xl
                text-white
                "

            >

                🐙 GitHub

            </a>

        )

    }


    {

        project.liveLink && (

            <a

                href={project.liveLink}

                target="_blank"

                rel="noreferrer"

                className="
                bg-green-600
                px-4
                py-2
                rounded-xl
                text-white
                "

            >

                🚀 Live Demo

            </a>

        )

    }

</div>
                                                <p className="text-slate-400 mt-3">

                                                    {project.description}

                                                </p>


                                                <div className="flex flex-wrap gap-3 mt-5">

                                                    {

                                                        project.techStack?.map(

                                                            (tech) => (

                                                                <span

                                                                    key={tech}

                                                                    className="
                                                                    bg-indigo-600
                                                                    px-3
                                                                    py-1
                                                                    rounded-xl
                                                                    text-white
                                                                    text-sm
                                                                    "

                                                                >

                                                                    {tech}

                                                                </span>

                                                            )

                                                        )

                                                    }

                                                </div>

                                            </div>

                                        ))

                                    }

                                </div>

                            )

                        }

                    </div>

                </div>

            </div>


            {

                showModal && (

                    <CollaborateModal

                        userId={user._id}

                        closeModal={() =>
                            setShowModal(false)
                        }

                    />

                )

            }

        </div>

    );

}

export default Profile;