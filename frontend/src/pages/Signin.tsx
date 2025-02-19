import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password 
        })
        const jwt = response.data.token
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
    }
    return <div className=" h-screen w-screen bg-purple-200 flex justify-center items-center">
        <div className=" bg-white rounded-2xl border min-w-48 p-6 ">
            <Input reference={usernameRef} placeholder="User Name"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <div className="flex justify-center pt-4 w-full">
                <Button onClick={signin} varient="primary" text="Signin" fullWidth={true}  />
            </div>
        </div>
    </div>
}