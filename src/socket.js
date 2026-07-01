import { io } from "socket.io-client";

const socket = io(
    "https://skillswap-backend-k3ao.onrender.com/"
);

export default socket;