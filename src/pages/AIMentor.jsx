import { useState } from "react";
import API from "../services/api";
import HeroBackground from "../components/HeroBackground";

function AIMentor() {

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const [chat, setChat] = useState([]);

    const sendMessage = async () => {

        if (!message.trim()) return;

        const userMessage = message;

        setChat((prev) => [

            ...prev,

            {
                role: "user",
                text: userMessage
            }

        ]);

        setMessage("");

        setLoading(true);

        try {

            const res = await API.post(

                "/ai/chat",

                {
                    message: userMessage
                }

            );

            setChat((prev) => [

                ...prev,

                {
                    role: "ai",
                    text: res.data.reply
                }

            ]);

        }

        catch (error) {

            console.log(error);

        }

        setLoading(false);

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
                    mb-8
                    "
                >
                   ✨ Lumi AI Mentor
                </h1>

                <div
                    className="
                    bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-800
                    rounded-3xl
                    p-8
                    h-[600px]
                    flex
                    flex-col
                    "
                >

                    <div
                        className="
                        flex-1
                        overflow-y-auto
                        space-y-5
                        "
                    >

                        {

                            chat.map((msg, index) => (

                                <div
                                    key={index}
                                    className={

                                        msg.role === "user"

                                            ? "flex justify-end"

                                            : "flex justify-start"

                                    }
                                >

                                    <div
                                        className={

                                            msg.role === "user"

                                                ?

                                                "max-w-[70%] bg-indigo-600 text-white p-4 rounded-3xl"

                                                :

                                                "max-w-[70%] bg-slate-800 text-white p-4 rounded-3xl"

                                        }
                                    >

                                        {msg.text}

                                    </div>

                                </div>

                            ))

                        }

                        {

                            loading && (

                                <div
                                    className="
                                    text-slate-400
                                    "
                                >
                                    AI is thinking...
                                </div>

                            )

                        }

                    </div>

                    <div
                        className="
                        flex
                        gap-4
                        mt-6
                        "
                    >

                        <input

                            value={message}

                            onChange={(e) =>
                                setMessage(
                                    e.target.value
                                )
                            }

                            onKeyDown={(e) => {

                                if (

                                    e.key === "Enter"

                                ) {

                                    sendMessage();

                                }

                            }}

                            placeholder="Ask anything..."

                            className="
                            flex-1
                            bg-slate-800
                            p-4
                            rounded-2xl
                            text-white
                            outline-none
                            "

                        />

                        <button

                            onClick={sendMessage}

                            className="
                            bg-indigo-600
                            hover:bg-indigo-500
                            px-8
                            rounded-2xl
                            text-white
                            "

                        >

                            Send

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AIMentor;