import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchBarPropos {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    debounceMs?: number
}
export function TableSearch({
    value,
    onChange,
    placeholder = "Search...",
    debounceMs = 300,
}: SearchBarPropos){
     const [inputValue, setInputValue] = useState(value)

     useEffect(()=> {
    const  handler = setTimeout(() => {
      onChange(inputValue)
     },debounceMs)
     return () => {
        clearTimeout(handler)
     }
},[inputValue,onChange,debounceMs])
        return(
            <>
            <div className="items-center flex border gap-2 rounded-lg px-3 py-2 w-full max-w-sm bg-white shadow-sm mb-2">
               <Search className="w-5 h-5 text-gray-500"/>
               <input
               type="text"
               placeholder={placeholder}
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               className="outline-none w-full"
               />
            </div>
            </>
        )
}