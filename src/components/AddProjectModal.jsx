import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function AddProjectModal({ closeModal }) {

    const [form, setForm] = useState({

        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        projectImage: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem(
                    "token"
                );

            await API.post(

                "/projects",

                {

                    ...form,

                    techStack:
                        form.techStack
                            .split(",")
                            .map(item =>
                                item.trim()
                            )

                },

                {

                    headers: {

                        Authorization:
                            `Bearer ${token}`

                    }

                }

            );

            toast.success(
                "Project Created 🚀"
            );

            window.location.reload();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };


    return (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">

                <h2 className="text-3xl font-bold text-white mb-8">

                    🚀 Add New Project

                </h2>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        name="title"
                        placeholder="Project Title"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        rows={4}
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
                    />

                    <input
                        name="techStack"
                        placeholder="React, Node, MongoDB"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
                    />

                    <input
                        name="githubLink"
                        placeholder="GitHub URL"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
                    />

                    <input
                        name="liveLink"
                        placeholder="Live Demo URL"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
                    />

                    <input
                        name="projectImage"
                        placeholder="Project Image URL"
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
                    />


                    <div className="flex flex-col md:flex-row gap-4">

                        <button
                            className="flex-1 py-4 bg-indigo-600 rounded-2xl text-white font-bold hover:bg-indigo-500 transition"
                        >
                            Create Project
                        </button>

                        <button
                            type="button"
                            onClick={closeModal}
                            className="flex-1 py-4 bg-slate-800 rounded-2xl text-white"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddProjectModal;