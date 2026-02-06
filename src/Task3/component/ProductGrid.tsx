import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchProducts } from "../features/product/productsApi"
import { ProductCart } from "./ProductCart"

function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4 space-y-4">
      <div className="h-40 bg-gray-200 rounded-lg" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-10 bg-gray-200 rounded" />
    </div>
  )
}

export function ProductGrid() {
  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector(
    (state) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Featured Products
        </h2>
        <p className="text-muted-foreground mt-1">
          Hand-picked items just for you
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}

        {!loading &&
          items.map((product) => (
            <div
              key={product.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <ProductCart product={product} />
            </div>
          ))}
      </div>
    </section>
  )
}