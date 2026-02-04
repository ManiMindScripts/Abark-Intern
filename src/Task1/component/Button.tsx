interface ButtonProps {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}

export function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition"

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  )
}
