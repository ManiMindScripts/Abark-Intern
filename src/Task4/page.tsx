import { useState } from "react"
import { ProductList } from "./features/component/ProductList"
import { useProducts } from "./features/hooks/useProducts"
import { useDeleteProduct } from "./features/hooks/useDeleteProduct"
import { useNavigate } from "react-router-dom"
import type { Product } from "./features/type"
import { Pagination } from "./features/component/Pagination" // <-- import

export function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10
  const navigate = useNavigate()

  const { data: products = [], isLoading, isError, error } = useProducts()
  const deleteMutation = useDeleteProduct()

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteMutation.mutate(id)
    }
  }

  const totalPages = Math.ceil(products.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  if (isLoading) return <p className="text-center">Loading products...</p>
  if (isError) return <p className="text-center text-red-500">{error.message}</p>

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/products/add")}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
        >
          Add Product
        </button>
      </div>

      <ProductList
        data={currentProducts}
        onEdit={(product: Product) => navigate("/products/edit", { state: product })}
        onDelete={handleDelete}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // handle page changes
      />
    </div>
  )
}