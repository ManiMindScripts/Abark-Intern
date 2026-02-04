import type { ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps{
    value: string
    onChange:(value: string) => void
}

export function SearchBar({value,onChange}: SearchBarProps){
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
return (
    <div className="max-w-md w-full relative">
        <Search
        size={18}
        className="left-3 top-1/2 absolute -translate-y-1/2 text-gray-400"
        />
        <input
        type="text"
        placeholder="Serach by name..."
        value={value}
        onChange={handleChange}
        className="
          w-full pl-10 pr-4 py-2
          rounded-xl border
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
        "
        />
    </div>
  )
}