import { useUIStore } from "../../zustandstore/uiStore"
import { useAppSelector,useAppDispatch } from "../../app/hooks"
import { removeFromCart } from "../../features/cart/cartSlice"
import { Button } from "../../../components/ui/button"

export function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore()
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="absolute right-0 top-0 h-full w-80 bg-white p-4">
        <h2 className="text-xl font-bold mb-4">
          Your Cart
        </h2>

        {items.length === 0 && (
          <p className="text-gray-500">
            Cart is empty
          </p>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-3 border-b pb-2"
          >
            <div>
              <p className="font-medium">
                {item.title}
              </p>
              <p className="text-sm">
                Qty: {item.quantity}
              </p>
            </div>

            <Button
              size="sm"
              variant="destructive"
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Remove
            </Button>
          </div>
        ))}

        <Button
          onClick={closeCart}
          className="mt-4 w-full"
        >
          Close
        </Button>
      </div>
    </div>
  )
}