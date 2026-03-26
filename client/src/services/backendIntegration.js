import axios from "axios";
const BackendBaserUrl = "http:localhost:5000";
const APIBaseUrl = "http:localhost:5000/api";
import { io } from "socket.io-client";

const API = axios.create({ baseURL: "APIBaseUrl" });

export const registerUser = (username) =>
  API.post("/auth/register", { username });

export const getRooms = () => API.get("/rooms");

export const createRoom = (name) => API.post("/rooms", { name });

export const getMessages = (roomId) => API.get(`/message/${roomId}`);

export const socket = io(BackendBaserUrl, { autoConnect: false });
