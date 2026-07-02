import { motion } from "framer-motion";
import HeroBackground from "../components/HeroBackground";
import { useEffect, useState } from "react";
import AddProjectModal from "../components/AddProjectModal";
import API from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const [suggestedBuilders, setSuggestedBuilders] = useState([]);
  const userName = localStorage.getItem("userName");

  useEffect(() => {

    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/projects/my-projects", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();

    const fetchUser = async () => {
      try {
        const id = localStorage.getItem("userId");
        const res = await API.get(`/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();

    const fetchBuilders = async () => {
      try {
        const myId = localStorage.getItem("userId");
        const token =
    localStorage.getItem("token");

const res =
    await API.get(

        "/users/suggested",

        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }

    );

setSuggestedBuilders(
    res.data
);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBuilders();

  }, []);

  const profileCompletion = user
    ? Math.round(
        (
          [
            user.bio,
            user.profileImage,
            user.college,
            user.branch,
            user.year,
            user.githubUsername,
            user.linkedinUsername,
            user.skills?.length,
            user.lookingFor
          ].filter(Boolean).length / 9
        ) * 100
      )
    : 0;

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">

      <HeroBackground />
      <Navbar />

      <div className="relative z-10 pt-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome Back, {userName} 🚀
            </h1>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Profile Completion</span>
                <span className="text-indigo-400">{profileCompletion}%</span>
              </div>

              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                  style={{ width: `${profileCompletion}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link
                to="/"
                className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-2xl text-white"
              >
                🏠 Home
              </Link>

              <Link
                to="/edit-profile"
                className="bg-violet-600 hover:bg-violet-500 px-6 py-3 rounded-2xl text-white"
              >
                ✏️ Edit Profile
              </Link>
            </div>

            <p className="text-slate-400 text-lg">
              Build projects, connect with students, and grow together.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-800/50 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-white">{projects.length}</h3>
                <p className="text-slate-400">Projects</p>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-white">
                  {user?.skills?.length || 0}
                </h3>
                <p className="text-slate-400">Skills</p>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-white">🚀</h3>
                <p className="text-slate-400">Builder Mode</p>
              </div>
            </div>
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
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">🚀 My Projects</h2>

                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-2xl text-white transition"
                  >
                    + Add Project
                  </button>
                </div>

                {projects.length === 0 ? (
                  <div className="bg-slate-800/50 p-8 rounded-2xl text-center">
                    <h3 className="text-2xl text-white">No Projects Yet 🚀</h3>
                    <p className="text-slate-400 mt-3">
                      Add your first project and start building your portfolio.
                    </p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div
                      key={project._id}
                      className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl mb-6 overflow-hidden"
                    >
                      {project.projectImage && (
                        <img
                          src={project.projectImage}
                          alt={project.title}
                          className="w-full h-56 object-cover rounded-2xl mb-4"
                        />
                      )}

                      <h3 className="text-2xl text-white font-bold">
                        🚀 {project.title}
                      </h3>

                      <p className="text-indigo-400 mt-2">
                        {project.techStack?.join(" • ")}
                      </p>

                      <p className="text-slate-400 mt-4">{project.description}</p>

                      <div className="flex gap-3 flex-wrap mt-5">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-slate-700 px-4 py-2 rounded-xl text-white"
                          >
                            🐙 GitHub
                          </a>
                        )}

                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-green-600 px-4 py-2 rounded-xl text-white"
                          >
                            🚀 Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </motion.div>

              {/* SUGGESTED BUILDERS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  🤝 Suggested Builders
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {suggestedBuilders.map((builder) => (
                    <Link
                      key={builder._id}
                      to={`/profile/${builder._id}`}
                      className="bg-slate-800/50 p-6 rounded-2xl hover:border hover:border-indigo-500 transition block"
                    >
                      <h3 className="text-white text-xl font-bold">
                        👨‍💻 {builder.name}
                      </h3>

                      <p className="text-indigo-400 mt-2">
                        {builder.branch || "Builder"}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {builder.skills?.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="bg-indigo-600 px-3 py-1 rounded-xl text-white text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

            </div>
            {/* ^ this closing div was the missing one — it closes LEFT SIDE */}

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* MY SKILLS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8"
              >
                <h2 className="text-2xl text-white font-bold mb-6">🛠 My Skills</h2>

                <div className="flex flex-wrap gap-3">
                  {user?.skills?.length ? (
                    user.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-indigo-600 px-4 py-2 rounded-xl text-white"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-slate-400">No skills added yet.</p>
                  )}
                </div>
              </motion.div>

              {/* UPCOMING SESSIONS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8"
              >
                <h2 className="text-2xl text-white font-bold mb-6">
                  📅 Upcoming Sessions
                </h2>

                <div className="bg-slate-800/50 p-5 rounded-2xl">
                  <h3 className="text-white font-bold">React Basics</h3>
                  <p className="text-slate-400 mt-2">Tomorrow • 6:00 PM</p>
                </div>
              </motion.div>

            </div>

          </div>

          {showModal && (
            <AddProjectModal closeModal={() => setShowModal(false)} />
          )}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
