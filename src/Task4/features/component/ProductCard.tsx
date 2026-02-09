import type { Product } from "../type"

interface ProductCardProps {
  product: Product
  onEdit: (product: Product) => void
  onDelete: (id: number) => void
}

export default function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative w-full h-56">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
        <p className="text-indigo-600 font-bold text-lg">${product.price}</p>
        <div className="flex justify-between mt-3">
          <button
            onClick={() => onEdit(product)}
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}