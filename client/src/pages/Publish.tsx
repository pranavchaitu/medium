import { CreateBlogSchema } from "@pranav.chaitu/medium-common"
import { AppBar } from "../components/AppBar"
import { useState } from "react"

export const Publish = () => {
    const [blog,setBlog] = useState<CreateBlogSchema>({
        title : "",
        content : ""
    })

    return <div>
        <AppBar name={localStorage.getItem("name") || "Anonymous"} type={"Publish"} blog={blog}/>
        <div className="flex justify-center flex-col items-center pt-20">   
            <div className="w-screen max-w-screen-lg ">
                <input onChange={(e) => {
                    setBlog({
                        ...blog,
                        title : e.target.value
                    })
                }} type="text" placeholder="Title" className="outline-none w-full h-20 font-serif text-5xl font-bold placeholder:text-gray-300 p-6"/>
            </div>
            <div className="w-screen max-w-screen-lg">
                <textarea onChange={(e) => {
                    setBlog({
                        ...blog,
                        content : e.target.value
                    })
                }} placeholder="Tell your story..." className="p-6 w-full outline-none pb-96 placeholder:font-serif placeholder:text-2xl placeholder:font-bold font-mono text-lg placeholder:text-gray-300"/>
            </div>
        </div>
    </div> 
}

