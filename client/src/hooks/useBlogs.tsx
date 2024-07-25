import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom";

export interface Blog {
    id : string;
    title : string;
    content : string;
    author : {
        name : string
    }
}

export const useBlogs = () => {
    const [loading,setLoading] = useState(true)
    const [blogs,setBlogs] = useState<Blog[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        callIt()
        async function callIt() {
            // const token = localStorage.getItem('token')
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`)   
                setBlogs(response.data.blogs)
                setLoading(false)
            } catch (error) {
                navigate('/signup')
            }
        }
    },[])
    
    return {
        loading,
        blogs
    }  
} 