import { io } from "socket.io-client";

const socket = io(
    "http://skillswap-backend-k3ao.onrender.com/"
);

export default socket;