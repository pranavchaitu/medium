import { SignupSchema } from "@pranav.chaitu/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const Auth = ({ type } : { type : "signup" | "signin" } ) => {
    const [postInputs,setPostInputs]  = useState<SignupSchema>({
        name : "",
        email : "",
        password : ""
    })

    const navigate= useNavigate()

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type.toString()}`,postInputs)
            const jwt = response.data.token;
            localStorage.setItem("token",`Bearer ${jwt}`)
            localStorage.setItem("name",postInputs.name!)    
            navigate('/blogs')
        } catch (e) {
            alert('error signing up')
            console.error(e);
        }
    }

    return <>
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
                    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">{type == 'signup' ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </>
}

interface InputLabelType {
    title : string,
    placeholder : string,
    type? : string
    onChange : (e : ChangeEvent<HTMLInputElement>) => void
}

const InputLabel = ({ title,placeholder,type,onChange } : InputLabelType) => {
    return <>
        <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">{ title }</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2.5" placeholder={placeholder} required />
        </div>
    </>
}

