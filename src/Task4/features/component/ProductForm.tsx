import { useEffect, useState } from "react"
import { useAddProduct } from "../hooks/useAddProduct"
import { useUpdateProduct } from "../hooks/useUpdateProduct"
import type { Product, NewProduct } from "../type"

type Props = {
  editingProduct?: Product | null
  onFinishEdit?: () => void
}

export function ProductForm({
  editingProduct,
  onFinishEdit,
}: Props) {
  const addMutation = useAddProduct()
  const updateMutation = useUpdateProduct()

  const isEditing = !!editingProduct

  const [form, setForm] = useState<NewProduct>({
    title: "",
    description: "",
    price: 0,
    thumbnail: "",
  })

  useEffect(() => {
    if (editingProduct) {
      setForm({
        title: editingProduct.title,
        description: editingProduct.description,
        price: editingProduct.price,
        thumbnail: editingProduct.thumbnail,
      })
    }
  }, [editingProduct])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.title || !form.price) {
      alert("Please fill all required fields!")
      return
    }

    if (isEditing && editingProduct) {
      updateMutation.mutate(
        { ...editingProduct, ...form },
        {
          onSuccess: () => {
            alert("Product updated successfully ✅")
            onFinishEdit?.()
          },
          onError: () => {
            alert("Failed to update product ❌")
          },
        }
      )
    } else {
      addMutation.mutate(form, {
        onSuccess: () => {
          alert("Product added successfully ✅")
        },
        onError: () => {
          alert("Failed to add product ❌")
        },
      })
    }

    // Clear form after adding/updating
    setForm({
      title: "",
      description: "",
      price: 0,
      thumbnail: "",
    })
  }

  return (
    <form className="space-y-4 border p-4 rounded-xl">
      <h2 className="text-lg font-semibold">
        {isEditing ? "Edit Product" : "Add Product"}
      </h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Image URL"
        value={form.thumbnail}
        onChange={(e) =>
          setForm({ ...form, thumbnail: e.target.value })
        }
      />

      <input
        type="number"
        className="w-full border p-2 rounded"
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: Number(e.target.value) })
        }
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        disabled={addMutation.isPending || updateMutation.isPending}
        className="w-full bg-black text-white py-2 rounded"
      >
        {isEditing ? "Update Product" : "Add Product"}
      </button>
    </form>
  )
}