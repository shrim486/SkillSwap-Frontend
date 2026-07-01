import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import HeroBackground from "../components/HeroBackground";
import toast from "react-hot-toast";

function BuilderHub() {

    const [requests, setRequests] = useState([]);
    const [collaborations, setCollaborations] = useState([]);

    useEffect(() => {

        fetchRequests();
        fetchCollaborations();

    }, []);

    const fetchRequests = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const res = await API.get(

                "/collaborations/my-requests",

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            setRequests(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const fetchCollaborations = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const res = await API.get(

                "/collaborations/my-collaborations",

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            setCollaborations(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const acceptRequest = async (id) => {

        try {

            const token =
                localStorage.getItem("token");

            await API.put(

                `/collaborations/accept/${id}`,

                {},

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            toast.success(
                "Collaboration accepted 🚀"
            );

            fetchRequests();
            fetchCollaborations();

        }

        catch (error) {

            console.log(error);

        }

    };

    const rejectRequest = async (id) => {

        try {

            const token =
                localStorage.getItem("token");

            await API.put(

                `/collaborations/reject/${id}`,

                {},

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            toast.success(
                "Request rejected"
            );

            fetchRequests();

        }

        catch (error) {

            console.log(error);

        }

    };

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

            <div
                className="
                relative
                z-10
                max-w-5xl
                mx-auto
                pt-32
                px-6
                "
            >

                <h1
                    className="
                    text-5xl
                    text-white
                    font-bold
                    mb-12
                    "
                >
                    🚀 Builder Hub
                </h1>


                {/* PENDING REQUESTS */}

                <h2
                    className="
                    text-3xl
                    text-white
                    font-bold
                    mb-6
                    "
                >
                    📥 Pending Requests
                </h2>

                {

                    requests.length === 0 ? (

                        <p className="text-slate-400 mb-16">
                            No pending requests.
                        </p>

                    ) : (

                        <div className="space-y-6 mb-16">

                            {

                                requests.map((req) => (

                                    <div

                                        key={req._id}

                                        className="
                                        bg-slate-900/70
                                        p-8
                                        rounded-3xl
                                        border
                                        border-slate-800
                                        "

                                    >

                                        <h2
                                            className="
                                            text-3xl
                                            text-white
                                            font-bold
                                            "
                                        >
                                            🚀 {req.projectIdea}
                                        </h2>

                                        <p className="text-indigo-400 mt-4">
                                            From: {req.sender.name}
                                        </p>

                                        <p className="text-slate-400 mt-2">
                                            Need: {req.roleNeeded}
                                        </p>

                                        <p className="text-slate-300 mt-4">
                                            {req.message}
                                        </p>

                                        <div className="flex gap-4 mt-6">

                                            <button

                                                onClick={() =>
                                                    acceptRequest(req._id)
                                                }

                                                className="
                                                bg-green-600
                                                hover:bg-green-500
                                                px-6
                                                py-3
                                                rounded-2xl
                                                text-white
                                                transition
                                                "

                                            >
                                                Accept
                                            </button>

                                            <button

                                                onClick={() =>
                                                    rejectRequest(req._id)
                                                }

                                                className="
                                                bg-red-600
                                                hover:bg-red-500
                                                px-6
                                                py-3
                                                rounded-2xl
                                                text-white
                                                transition
                                                "

                                            >
                                                Reject
                                            </button>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    )

                }


                {/* ACTIVE COLLABORATIONS */}

                <h2
                    className="
                    text-3xl
                    text-white
                    font-bold
                    mb-6
                    "
                >
                    🔥 Active Collaborations
                </h2>

                {

                    collaborations.length === 0 ? (

                        <p className="text-slate-400">
                            No active collaborations yet.
                        </p>

                    ) : (

                        <div className="space-y-6">

                            {

                                collaborations.map((collab) => (

                                    <div

                                        key={collab._id}

                                        className="
                                        bg-slate-900/70
                                        p-8
                                        rounded-3xl
                                        border
                                        border-slate-800
                                        "

                                    >

                                        <h3
                                            className="
                                            text-3xl
                                            text-white
                                            font-bold
                                            "
                                        >
                                            🚀 {collab.projectIdea}
                                        </h3>

                                        <p className="text-indigo-400 mt-4">
                                            Role Needed:
                                            {" "}
                                            {collab.roleNeeded}
                                        </p>

                                        <p className="text-slate-300 mt-3">
                                            Members:
                                            {" "}
                                            {collab.sender.name}
                                            {" • "}
                                            {collab.receiver.name}
                                        </p>
<Link

    to={`/chat/${
        collab.sender._id ===
        localStorage.getItem("userId")

            ? collab.receiver._id

            : collab.sender._id
    }`}

    className="
    inline-block
    mt-6
    bg-indigo-600
    hover:bg-indigo-500
    px-6
    py-3
    rounded-2xl
    text-white
    "

>

    💬 Open Chat

</Link>
                                    </div>

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default BuilderHub;