import HeroBackground from "../components/HeroBackground";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import CollaborateModal
from "../components/CollaborateModal";


function Profile() {

    const { id } = useParams();

    const [user, setUser] = useState(null);
const [projects, setProjects] = useState([]);
const [showModal, setShowModal] =
useState(false);
    useEffect(() => {

        const fetchUser = async () => {

            try {

                const res = await API.get(`/users/${id}`);

                setUser(res.data);
const projectRes = await API.get(
    `/projects/user/${id}`
);

setProjects(projectRes.data);
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

                <div
                    className="
                    max-w-4xl
                    mx-auto
                    bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-800
                    rounded-3xl
                    p-10
                    "
                >

                    <div className="text-7xl mb-6">
                        👨‍💻
                    </div>

                    <h1 className="text-5xl font-bold text-white">
                        {user.name}
                    </h1>

                    <p className="text-indigo-400 mt-4">
                        🏫 {user.college || "Not Added"}
                    </p>

                    <p className="text-slate-400 mt-2">
                        💻 {user.branch || "Not Added"}
                    </p>

                    <p className="text-slate-400 mt-2">
                        📅 {user.year || "Not Added"}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">

                        {user.skills?.map((skill) => (

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

                        ))}

                    </div>

                    <p className="text-indigo-300 mt-8">
                        🔗 GitHub:
                        {" "}
                        {user.githubUsername || "Not Added"}
                    </p>

                    <p className="text-violet-300 mt-4">
                        🤝 Looking For:
                        {" "}
                        {user.lookingFor || "Open to Collaborate"}
                    </p>
                  {
    localStorage.getItem("userId") !== user._id && (

        <button

            onClick={() => setShowModal(true)}

            className="
            mt-8
            bg-indigo-600
            hover:bg-indigo-500
            px-6
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

<div className="mt-12">

    <h2 className="text-3xl font-bold text-white mb-6">
        🚀 Projects
    </h2>

    {projects.length === 0 ? (

        <p className="text-slate-400">
            No projects added yet.
        </p>

    ) : (

        <div className="space-y-6">

            {projects.map((project) => (

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

                    <p className="text-slate-400 mt-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">

                        {project.techStack?.map((tech) => (

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

                        ))}

                    </div>

                </div>

            ))}

        </div>

    )}

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