import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"

export const AppBar = ({ name } : { name : string }) => {
    return <>
        <div className="fixed z-10 bg-white flex justify-between items-center py-2 px-8 border-b w-full">
            <div className="flex gap-10 items-center">
                <Link to={'/blogs'}>
                    <div className="text-3xl font-serif font-semibold">Medium</div>
                </Link>
                <InputBox />
            </div>
            <div>
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