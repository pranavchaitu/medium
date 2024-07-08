export const BlogsSkeleton = () => {
    return <>
        <div className="border-b border-gray-300 py-4 px-10 md:p-4 cursor-pointer"> 
            <div className="flex items-center gap-1.5">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="text-sm text-gray-800 w-20 h-4 bg-gray-200 rounded mt-1"></div>
                <div>&middot;</div> 
                <div className="text-sm text-gray-500 mt-1 w-20 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="pt-2">
                <div className="font-semibold text-xl leading-6 pr-5 mt-1 h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="mt-2 font-thin h-4 bg-gray-200 rounded w-full"></div>
                <div className="flex justify-start mt-6">
                    <div className="bg-gray-50 px-2 py-1 text-xs rounded-full h-4 w-16"></div>
                </div>
            </div>
        </div>
    </>
}