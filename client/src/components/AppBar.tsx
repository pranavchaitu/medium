import { CreateBlogSchema } from "@pranav.chaitu/medium-common"
import { Avatar } from "./Avatar"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const AppBar = ({ name,type,blog } : { name : string,type : "Publish" |"New",blog? : CreateBlogSchema }) => {
    const navigate = useNavigate();
    
    async function sendRequest() {
        if(!blog?.title || !blog?.content) {
            return alert('enter some title/content')
        }
        try {
            const token = localStorage.getItem('token')
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,blog,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            navigate(`/blog/${response.data.id}`)
        } catch (e) {
            alert("please login/create a account") 
            console.error(e);
        }
    }
    async function logOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        navigate('/signup')
    }
    return <>
        <div className="fixed z-10 bg-white flex justify-between items-center py-2 px-4 md:px-8 border-b w-full">
            <div className="flex gap-10 items-center">
                <Link to={'/blogs'}>
                    <div className="text-3xl font-serif font-semibold">Medium</div>
                </Link>
                <InputBox />
            </div>
            <div className="flex items-center gap-4">
                {type == "New" ? 
                <Link to={'/publish'}>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5">
                        New
                    </button>
                </Link> : 
                <Link to={""}>
                    <button onClick={sendRequest} type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5">
                        Publish
                    </button>
                </Link>} 
                <button onClick={logOut} type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 ">
                        Logout
                </button>
                <Avatar type="big" name={name}/>
            </div>
        </div>
    </>
}

export const InputBox = () => {
    return <>
    <div className="hidden md:block relative mx-auto text-gray-600">
        <input className="border border-gray-300 focus:border-gray-700 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
      </div>
    </>
}