import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export interface BlogCardProps {
    id : string;
    authorName : string;
    title : string;
    content : string;
    publishedDate? : string
}

export const BlogCard = ({ id,authorName,title,content,publishedDate } : BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-gray-300 py-4 px-10 md:p-4 cursor-pointer"> 
            <div className="flex items-center gap-1.5">
                <Avatar name={authorName} type="small"/>
                <div className="text-sm text-gray-800">
                    {authorName}
                </div>
                <a>&middot;</a> 
                <div className="text-sm text-gray-500">
                    {publishedDate || "July 13"}
                    </div>
            </div>
            <div className="pt-2">
                <div className="font-semibold text-xl leading-6 pr-5">
                    {title}
                </div>
                <div className="mt-2 font-thin">
                    {content.length > 100 ? content.slice(0,100) + "..." : content}
                </div>
                <div className="flex justify-start mt-6">
                    <div className="bg-gray-50 px-2 py-1 text-xs rounded-full">
                        {`${Math.ceil(content.length/100)} min read`}
                    </div>
                </div>
            </div>
        </div>
    </Link> 
}