import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/api";
import HeroBackground from "../components/HeroBackground";
import {
    getUnreadCount
}
from "../utils/unreadMessages";
function MyChats() {

    const [chats, setChats] = useState([]);
const[unreadCout,setUnreadCount]=useState(0);
    useEffect(() => {

        fetchChats();
setUnreadCount(
    getUnreadCount()
);
    }, []);

    const fetchChats = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const res = await API.get(

                "/collaborations/my-chats",

                {
                    headers: {
                        Authorization:
                        `Bearer ${token}`
                    }
                }

            );

            setChats(res.data);

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
                    💬 My Chats
                </h1>

                {

                    chats.length === 0 ? (

                        <p className="text-slate-400">
                            No chats yet.
                        </p>

                    ) : (

                        <div className="space-y-6">

                            {

                                chats.map((chat) => (

                                    <div

                                        key={chat.userId}

                                        className="
                                        bg-slate-900/70
                                        border
                                        border-slate-800
                                        p-8
                                        rounded-3xl
                                        "

                                    >

                                        <h2
                                            className="
                                            text-3xl
                                            text-white
                                            font-bold
                                            "
                                        >
                                            👨‍💻 {chat.name}
                                        </h2>

                                        <p
                                            className="
                                            text-indigo-400
                                            mt-3
                                            "
                                        >
                                            🚀 {chat.projectIdea}
                                        </p>

                                        <Link

                                            to={`/chat/${chat.userId}`}

                                            className="
                                            inline-block
                                            mt-6
                                            bg-indigo-600
                                            hover:bg-indigo-500
                                            px-6
                                            py-3
                                            rounded-2xl
                                            text-white
                                            transition
                                            "

                                        >

                                            Open Chat

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

export default MyChats;