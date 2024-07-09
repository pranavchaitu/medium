import axios from "axios"
import { BACKEND_URL } from "../config"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Me = () => {
    const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem("token")
      if(token) {
        axios.get(`${BACKEND_URL}/api/v1/me`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        }).then((response) => {
          if(response.data.isValid) {
            navigate('/blogs')
          } else {
            navigate('/signup')
          }
        })
      } else {
        navigate('/signup')
      }
    },[])
    return <>
        <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
          <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
        </div>
    </>
}