import { useUIStore } from "../../zustandstore/uiStore"
import { useAppSelector } from "../../app/hooks"

export function Navbar() {
  const openCart = useUIStore((s) => s.openCart)
  const totalItems = useAppSelector(
    (state) => state.cart.items.length
  )

  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">🛒 Shop</h1>

      <button
        onClick={openCart}
        className="relative bg-black text-white px-4 py-2 rounded"
      >
        Cart
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </nav>
  )
}