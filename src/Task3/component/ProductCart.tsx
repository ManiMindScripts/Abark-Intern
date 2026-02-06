import type { Product } from "../features/product/products.types"
import { useAppDispatch } from "../app/hooks"
import { addToCart } from "../features/cart/cartSlice"
import { Button } from "../../components/ui/button"

interface ProductCardProps {
  product: Product
}

export function ProductCart({ product }: ProductCardProps) {
  const dispatch = useAppDispatch()

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        ${product.price}
      </p>

      <Button
        className="w-full"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </Button>
    </div>
  )
}