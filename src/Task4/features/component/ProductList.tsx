import type { Product } from "../type"
import ProductCard from "./ProductCard"

interface ProductListProps {
  data: Product[]
  onEdit: (product: Product) => void
  onDelete: (id: number) => void
}

export function ProductList({ data, onEdit, onDelete }: ProductListProps) {
  if (!data.length) return <p className="text-center">No products found</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
          
        />
      ))}
    </div>
  )
}


