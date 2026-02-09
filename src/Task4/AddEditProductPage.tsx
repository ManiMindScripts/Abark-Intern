import { useNavigate, useLocation } from "react-router-dom"
import { ProductForm } from "./features/component/ProductForm"
import type { Product } from "./features/type"

export function AddEditProductPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const productToEdit = location.state as Product | null 

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        {productToEdit ? "Edit Product" : "Add Product"}
      </h1>

      <ProductForm
        editingProduct={productToEdit || null}
        onFinishEdit={() => navigate("/products")}
      />
    </div>
  )
}