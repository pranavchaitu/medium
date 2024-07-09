import { useEffect, useState } from "react"
import { Blog } from "./useBlogs"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const useBlog = ({ id } : { id : string }) => {
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState<Blog>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
            .then((response) => {
                setBlog(response.data.blog)
                setLoading(false)
            })
    },[id])

    return {
        loading,
        blog
    }  
} 