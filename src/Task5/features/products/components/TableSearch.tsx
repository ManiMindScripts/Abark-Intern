import { useDeferredValue, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchBarPropos {
    value: string
    onChange: (value: string) => void
    placeholder?: string

}
export function TableSearch({
    value,
    onChange,
    placeholder = "Search...",
}: SearchBarPropos) {
    const deferredValue = useDeferredValue(value)

    useEffect(() => {
        onChange(deferredValue)
    }, [deferredValue, onChange])
    return (
        <>
            <div className="items-center flex border gap-2 rounded-lg px-3 py-2 w-full max-w-sm bg-white shadow-sm mb-2">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="outline-none w-full"
                />
            </div>
        </>
    )
}