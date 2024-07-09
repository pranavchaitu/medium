import { useEffect, useState } from "react"
import { Blog } from "./useBlogs"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const useBlog = ({ id } : { id : string }) => {
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState<Blog>()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers : {
                Authorization : `Bearer ${token}`
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