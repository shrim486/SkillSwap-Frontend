import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import HeroBackground from "../components/HeroBackground";
import API from "../services/api";
import socket from "../socket";
import {
    clearUnread,
    addUnread
} from "../utils/unreadMessages";
function Chat() {

    const { id } = useParams();

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
const [otherUser, setOtherUser] = useState(null);
    const messagesEndRef = useRef(null);

    const userId =
        localStorage.getItem("userId");
        const [onlineUsers, setOnlineUsers] =
    useState([]);
    const [isTyping, setIsTyping] =
    useState(false);
   
const fetchUser = async () => {

    try {

        const res = await API.get(
            `/users/${id}`
        );

        setOtherUser(
            res.data
        );

    }

    catch (error) {

        console.log(error);

    }

};
    // Join socket room
    useEffect(() => {

        socket.emit(
            "joinRoom",
            userId
        );

    }, [userId]);


    // Listen for incoming messages
   useEffect(() => {

    socket.on(

        "receiveMessage",

        (message) => {

            const senderId =
                message.sender?._id ||
                message.sender;

            const currentChatId =
                id;

            if (senderId !== currentChatId) {

                console.log(
                    "ADDING UNREAD:",
                    senderId
                );

                addUnread(senderId);

            }

            setMessages((prev) => [

                ...prev,
                message

            ]);

        }

    );

    return () => {

        socket.off(
            "receiveMessage"
        );

    };

}, [id]);
socket.on(

    "receiveMessage",

    (message) => {

        console.log("FULL MESSAGE:", message);

        const senderId =

            message.sender?._id ||
            message.sender;

        console.log(
            "SENDER ID:",
            senderId
        );

        if (senderId !== id) {

            addUnread(senderId);

        }

        setMessages((prev) => [

            ...prev,
            message

        ]);

    }

);
useEffect(() => {

    socket.on(

        "onlineUsers",

        (users) => {

            setOnlineUsers(users);

        }

    );

    return () => {

        socket.off(
            "onlineUsers"
        );

    };

}, []);
useEffect(() => {

    socket.on(

        "userTyping",

        () => {

            setIsTyping(true);

        }

    );

    socket.on(

        "userStoppedTyping",

        () => {

            setIsTyping(false);

        }

    );

    return () => {

        socket.off("userTyping");

        socket.off("userStoppedTyping");

    };

}, []);
    // Fetch old messages
    useEffect(() => {

        fetchMessages();
fetchUser();
clearUnread(id);
    }, [id]);


    const fetchMessages = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const res = await API.get(

                `/messages/${id}`,

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            setMessages(
                res.data
            );

        }

        catch (error) {

            console.log(error);

        }

    };


    const sendMessage = async () => {

        try {

            if (!text.trim()) return;

            const token =
                localStorage.getItem("token");

            await API.post(

                "/messages",

                {
                    receiver: id,
                    text
                },

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            socket.emit(

                "sendMessage",

                {
                    sender: userId,
                    receiver: id,
                    text
                }

            );

            setMessages((prev) => [

                ...prev,

                {
                    _id: Date.now(),
                    sender: userId,
                    text,
                    createdAt: new Date()
                }

            ]);

            setText("");

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
                max-w-3xl
                mx-auto
                pt-32
                px-6
                "
            >

                <div
                    className="
                    bg-slate-900/70
                    backdrop-blur-xl
                    rounded-3xl
                    p-8
                    "
                >

                    {/* HEADER */}

                    <div className="mb-8">

    <h1
        className="
        text-4xl
        font-bold
        text-white
        "
    >
        💬 {otherUser?.name || "Loading..."}
    </h1>

    <p
    className="
    mt-2
    "
>

    {

        onlineUsers.includes(id)

            ? (

                <span className="text-green-400">

                    🟢 Online

                </span>

            )

            : (

                <span className="text-slate-400">

                    ⚫ Offline

                </span>

            )

    }

</p>
</div>

                    {/* MESSAGES */}

                    <div
                        className="
                        h-[600px]
                        overflow-y-auto
                        space-y-4
                        mb-6
                        p-4
                        rounded-3xl
                        bg-slate-950/40
                        "
                    >

                        {

                            messages.map((msg) => {

                                const isMine =

                                    msg.sender?.toString() ===
                                    userId;

                                return (

                                    <div

                                        key={msg._id}

                                        className={`
                                            flex
                                            ${
                                                isMine
                                                    ? "justify-end"
                                                    : "justify-start"
                                            }
                                        `}

                                    >
{

    isTyping && (

        <p
            className="
            text-slate-400
            italic
            ml-2
            "
        >
            {otherUser?.name}
           
            is typing...
        </p>

    )

}
                                        <div

                                            className={`
                                                max-w-[70%]
                                                p-4
                                                rounded-[30px]
                                                text-white
                                                break-words

                                                ${
                                                    isMine
                                                        ? "bg-indigo-600"
                                                        : "bg-slate-800"
                                                }
                                            `}

                                        >

                                            <p>
                                                {msg.text}
                                            </p>

                                            <p
                                                className="
                                                text-xs
                                                text-slate-300
                                                mt-2
                                                text-right
                                                "
                                            >

                                                {

                                                    msg.createdAt

                                                        ? new Date(
                                                            msg.createdAt
                                                        ).toLocaleTimeString(
                                                            [],
                                                            {
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            }
                                                        )

                                                        : "Now"

                                                }

                                            </p>

                                        </div>

                                    </div>

                                );

                            })

                        }

                        <div
                            ref={messagesEndRef}
                        />

                    </div>


                    {/* INPUT */}

                    <div className="flex gap-4">

                        <input

                            value={text}

                           onChange={(e) => {

    setText(
        e.target.value
    );

    socket.emit(

        "typing",

        {
            sender: userId,
            receiver: id
        }

    );

    clearTimeout(
        window.typingTimeout
    );

    window.typingTimeout =
        setTimeout(() => {

            socket.emit(

                "stopTyping",

                {
                    sender: userId,
                    receiver: id
                }

            );

        }, 1000);

}}

                            placeholder="Type message..."

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
                            transition
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

export default Chat;