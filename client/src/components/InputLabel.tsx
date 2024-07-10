import { ChangeEvent } from "react"

interface InputLabelType {
    title : string,
    placeholder : string,
    type? : string
    onChange : (e : ChangeEvent<HTMLInputElement>) => void
}

export const InputLabel = ({ title,placeholder,type,onChange } : InputLabelType) => {
    return <>
        <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">{ title }</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2.5" placeholder={placeholder} required />
        </div>
    </>
}