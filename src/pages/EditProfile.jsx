import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroBackground from "../components/HeroBackground";
import API from "../services/api";
import toast from "react-hot-toast";

function EditProfile() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        profileImage: "",
        bio: "",
        college: "",
        branch: "",
        year: "",
        githubUsername: "",
        linkedinUsername: "",
        skills: "",
        lookingFor: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");

            await API.put(

                "/users/update-profile",

                {

                    ...form,

                    skills: form.skills
                        .split(",")
                        .map((skill) =>
                            skill.trim()
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
                "Profile Updated 🚀"
            );

            navigate("/dashboard");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Update Failed"

            );

        }

    };

    return (

        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            <HeroBackground />

            <div className="relative z-10 pt-28 px-4 md:px-6">

                <div className="max-w-3xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10">

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
                        ✏️ Edit Profile
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <input
                            name="profileImage"
                            placeholder="Profile Image URL"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <textarea
                            name="bio"
                            placeholder="Tell everyone about yourself..."
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="college"
                            placeholder="College"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="branch"
                            placeholder="Branch"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="year"
                            placeholder="Year"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="githubUsername"
                            placeholder="GitHub Username"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="linkedinUsername"
                            placeholder="LinkedIn Username"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="skills"
                            placeholder="React, Node, AI"
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <input
                            name="lookingFor"
                            placeholder="Looking For..."
                            onChange={handleChange}
                            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
                        />

                        <button
                            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
                        >
                            Save Changes
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditProfile;