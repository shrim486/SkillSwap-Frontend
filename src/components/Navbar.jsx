import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import socket from "../socket";
import { addUnread, getUnreadCount } from "../utils/unreadMessages";
import API from "../services/api";

function Navbar() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/collaborations/my-requests", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRequestCount(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    const handleMessage = (message) => {
      const currentPath = window.location.pathname;
      const senderId = message.sender?._id || message.sender;

      if (currentPath !== `/chat/${senderId}`) {
        addUnread(senderId);
        setUnreadCount(getUnreadCount());
        console.log("UNREAD ADDED:", senderId);
      }
    };

    setUnreadCount(getUnreadCount());
    fetchRequests();

    socket.on("receiveMessage", handleMessage);

    return () => {
      socket.off("receiveMessage", handleMessage);
    };
  }, []);

  const isLoggedIn = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-slate-950/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-white transition-all duration-300 hover:scale-105"
        >
          SkillSwap 🚀
        </Link>

        <div className="hidden md:flex gap-10 text-slate-300">

  <a
    href="#features"
    className="transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]"
  >
    Features
  </a>

  <Link
    to="/explore"
    className="transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]"
  >
    Explore
  </Link>

  <a
    href="#community"
    className="transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]"
  >
    Community
  </a>

</div>
        <div className="flex gap-4 items-center">
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="px-5 py-2 text-slate-300 hover:text-white transition-all"
              >
                Dashboard
              </Link>

              <Link
                to="/builder-hub"
                className="relative px-5 py-2 text-slate-300 hover:text-white transition-all"
              >
                🔔
                {requestCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {requestCount}
                  </span>
                )}
              </Link>

              <Link
                to="/my-chats"
                className="relative px-5 py-2 text-slate-300 hover:text-white transition-all"
              >
                Chats
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {unreadCount}
                  </span>
                )}
              </Link>

              <Link
                to={`/profile/${userId}`}
                className="px-5 py-2 text-slate-300 hover:text-white transition-all"
              >
                My Profile
              </Link>

              <Link
                to="/settings"
                className="px-5 py-2 text-slate-300 hover:text-white transition-all"
              >
                ⚙️ Settings
              </Link>

              <button
                onClick={() => {
                  localStorage.clear();
                  socket.disconnect();
                  window.location.href = "/";
                }}
                className="px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-500 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-1"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold transition-all duration-300 hover:bg-indigo-500 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.8)]"
              >
                Join Now
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;