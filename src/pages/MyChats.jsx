import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/api";
import HeroBackground from "../components/HeroBackground";
import { getUnreadCount } from "../utils/unreadMessages";

function MyChats() {

    const [chats, setChats] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

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

        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            <HeroBackground />

            <div className="relative z-10 max-w-6xl mx-auto pt-28 px-4 md:px-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

                    <h1 className="text-4xl md:text-5xl text-white font-bold">

                        💬 My Chats

                    </h1>

                    <div className="mt-4 md:mt-0 bg-indigo-600 px-5 py-3 rounded-2xl text-white">

                        Unread: {unreadCount}

                    </div>

                </div>


                {

                    chats.length === 0 ? (

                        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-10 text-center">

                            <p className="text-slate-400 text-lg">

                                No chats yet. Start collaborating 🚀

                            </p>

                        </div>

                    ) : (

                        <div className="grid md:grid-cols-2 gap-6">

                            {

                                chats.map((chat) => (

                                    <div

                                        key={chat.userId}

                                        className="
                                        bg-slate-900/70
                                        border
                                        border-slate-800
                                        p-6
                                        rounded-3xl
                                        hover:border-indigo-500
                                        transition
                                        "

                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="text-5xl">

                                                👨‍💻

                                            </div>

                                            <div>

                                                <h2 className="text-2xl text-white font-bold">

                                                    {chat.name}

                                                </h2>

                                                <p className="text-indigo-400 mt-1">

                                                    🚀 {chat.projectIdea}

                                                </p>

                                            </div>

                                        </div>


                                        <Link

                                            to={`/chat/${chat.userId}`}

                                            className="
                                            block
                                            text-center
                                            mt-6
                                            bg-indigo-600
                                            hover:bg-indigo-500
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