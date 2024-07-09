import { SignupSchema } from "@pranav.chaitu/medium-common"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { Me } from "../pages/Me"
import { InputLabel } from "./InputLable"
import { DotLoader } from "./DotLoader"

export const Auth = ({ type } : { type : "signup" | "signin" } ) => {
    Me()
    const [postInputs,setPostInputs]  = useState<SignupSchema>({
        name : "",
        email : "",
        password : ""
    })
    const [loading,setLoading] = useState(false)

    const navigate= useNavigate()

    async function sendRequest() {
        setLoading(true)
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type.toString()}`,postInputs)
            const jwt = response.data.token;
            localStorage.setItem("token",jwt)
            localStorage.setItem("name",postInputs.name || "User")
            setLoading(false)
            navigate('/blogs')
        } catch (e) {
            alert('error signing up')
            navigate('/')
            console.error(e);
        }
    }

    return <div>
        <div className="h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center flex-col">
                <div className="px-8 mb-4 text-center">`
                    <div className="text-3xl font-bold">
                        {type == "signup" ? "Create an account" : "Login to your account"}
                    </div>
                    {type == "signup" ?                     
                    <div className="text-slate-600 pt-1">
                        Aldready have an account?  
                        <Link to={"/signin"} className="underline ml-1">Login</Link>
                    </div> : 
                    <div className="text-slate-600 pt-1">
                        Don't have an account?  
                        <Link to={"/signup"} className="underline ml-1">Create</Link>
                    </div>}
                </div>
                {type === "signup" ? <InputLabel title="Username" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name : e.target.value
                    })
                }} placeholder="Enter your username"/> : null }
                
                <InputLabel title="Email" placeholder="Enter your email" onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        email : e.target.value
                    }))
                }}/>
                <InputLabel title="Password" placeholder="Enter your Password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password : e.target.value
                    })
                }} type="password"/>
                <div className="mt-2">
                    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">{loading ? <DotLoader /> : type == 'signup' ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}



