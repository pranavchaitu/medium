export function Avatar( { name,type } : { name : string, type : "small" | "big"} ) {
    return <>
        <div className={`relative inline-flex items-center justify-center ${type == "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full`}>
            <span className={`${type === "small" ? "font-normal" : "font-medium"} text-gray-600 text-sm`}>{name[0].toUpperCase()}</span>
        </div>
    </>
}