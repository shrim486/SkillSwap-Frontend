import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function CollaborateModal({ userId, closeModal }) {

    const [form, setForm] = useState({

        projectIdea: "",
        roleNeeded: "",
        message: ""

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

            await API.post(

                "/collaborations/send",

                {

                    receiver: userId,

                    ...form

                },

                {

                    headers: {

                        Authorization:
                            `Bearer ${token}`

                    }

                }

            );

            toast.success(
                "Request sent 🚀"
            );

            closeModal();

        }

        catch (error) {

            console.log(error);

            toast.error(
                "Failed to send request"
            );

        }

    };

    return (

        <div
            className="
            fixed
            inset-0
            bg-black/70
            flex
            justify-center
            items-center
            z-50
            "
        >

            <div
                className="
                bg-slate-900
                p-8
                rounded-3xl
                w-[500px]
                "
            >

                <h2
                    className="
                    text-3xl
                    text-white
                    mb-6
                    "
                >
                    🤝 Start Collaboration
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input

                        name="projectIdea"

                        placeholder="Project Idea"

                        onChange={handleChange}

                        className="
                        w-full
                        p-4
                        rounded-2xl
                        bg-slate-800
                        text-white
                        "

                    />

                    <input

                        name="roleNeeded"

                        placeholder="Role Needed"

                        onChange={handleChange}

                        className="
                        w-full
                        p-4
                        rounded-2xl
                        bg-slate-800
                        text-white
                        "

                    />

                    <textarea

                        name="message"

                        placeholder="Write your message..."

                        onChange={handleChange}

                        className="
                        w-full
                        p-4
                        rounded-2xl
                        bg-slate-800
                        text-white
                        h-32
                        "

                    />

                    <div className="flex gap-4">

                        <button

                            type="submit"

                            className="
                            flex-1
                            bg-indigo-600
                            py-3
                            rounded-2xl
                            text-white
                            "

                        >

                            Send Request

                        </button>

                        <button

                            type="button"

                            onClick={closeModal}

                            className="
                            flex-1
                            bg-slate-700
                            py-3
                            rounded-2xl
                            text-white
                            "

                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CollaborateModal;