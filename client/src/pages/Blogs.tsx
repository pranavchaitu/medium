import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Blog, useBlogs } from "../hooks/useBlogs"

export const Blogs = () => {
    const { loading,blogs } : {
        loading : boolean,
        blogs : Blog[]
    } = useBlogs();

    if(loading) {
        return <>
            Loading..
        </>
    }

    return <>
        <AppBar name={localStorage.getItem('name') || "User" } type={"New"}/>
        <div className="pt-16 flex flex-col items-center">
            <div className="w-screen max-w-screen-md">
                {blogs.map(blog => <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="Dec 3, 2023"/>  
                )}   
            </div>
        </div>
    </>
}