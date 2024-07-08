import { useParams } from "react-router-dom"
import { AppBar } from "../components/AppBar"
import { useBlog } from "../hooks/useBlog"
import { Avatar } from "../components/Avatar"

export const Blog = () => {
    const { id } = useParams()
    const { blog,loading } = useBlog({ id : id || "" })

    if(loading) {
        return <>
            Loading...
        </> 
    }

    return <div>
        <AppBar name={localStorage.getItem("name") || "User"} type={"New"} />
        <div className="flex flex-col items-center">
            <div className="pt-20 lg:pt-36 grid grid-cols-12 w-screen max-w-screen-lg p-8">   
                <div className="col-span-12 lg:col-span-8 ">
                    <div className="text-4xl font-extrabold" >
                        {blog?.title}                      
                    </div>
                    <div className="py-2 text-sm text-slate-500">
                        Post on 2nd December 2023 
                    </div>
                    <div className="text-slate-600 font-mono">
                        {blog?.content}    
                    </div>  
                </div>
                <div className="lg:col-span-4 hidden lg:block">
                    <div className="text-sm text-slate-600">
                        Author
                    </div>
                    <div className="flex gap-4 items-center mt-2">
                        <Avatar name={blog?.author.name || "Anonymous"} type="big"/>
                        <div>
                            <div className="font-semibold">
                                {blog?.author.name || "Anonymous"}
                            </div>
                            <div className="text-sm text-slate-500">
                                one byte at a time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-8 block lg:hidden">
            <div className="text-sm text-slate-600">
                Author
            </div>
            <div className="flex gap-4 items-center mt-2">
                <Avatar name={blog?.author.name || "Anonymous"} type="big"/>
                <div>
                    <div className="font-semibold">
                        {blog?.author.name}
                    </div>
                    <div className="text-sm text-slate-500">
                        one byte at a time
                    </div>
                </div>
            </div>
        </div>

    </div>
}