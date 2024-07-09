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
        WELCOME TO MEDIUM
    </>
}