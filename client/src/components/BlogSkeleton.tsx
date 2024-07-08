export const BlogSkeleton = () => {
    return <>
        <div className="flex flex-col items-center">
            <div className="pt-20 lg:pt-36 grid grid-cols-12 gap-4 w-screen max-w-screen-lg p-8">
                <div className="col-span-12 lg:col-span-8">
                <br />
                <div className="text-4xl font-extrabold h-8 bg-gray-200 rounded w-3/4"></div>
                <br />
                <div className="py-2 text-sm text-slate-500 h-4 bg-gray-200 rounded w-1/2"></div>
                <br />
                <div className="text-slate-600 font-mono h-20 bg-gray-200 rounded"></div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
                <div className="text-sm text-slate-600 h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="flex gap-4 items-center mt-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                        <div className="font-semibold h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="text-sm text-slate-500 h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="px-8 block lg:hidden">
            <div className="text-sm text-slate-600 h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="flex gap-4 items-center mt-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
                <div className="font-semibold h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="text-sm text-slate-500 h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            </div>
        </div>
    </>
}