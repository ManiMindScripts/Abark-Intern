// ui/tooltip.tsx - Simple tooltip implementation
import { useState } from "react"

interface TooltipProps {
  children: React.ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  const [show, setShow] = useState(false)
  
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && (
        <div className="absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          {content}
        </div>
      )}
    </div>
  )
}