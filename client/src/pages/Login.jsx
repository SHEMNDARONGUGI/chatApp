import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/backendIntegration";

export default function Login({ setUser }){
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const handleLogin = async() =>{
        
    }
}

