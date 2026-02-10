import type { ColumnDef } from "@tanstack/react-table"
import type { Product } from "../types/product.type";


export const productColumns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "ID",
        enableSorting: false
    },
     {
        accessorKey: "title",
        header: "Title"
    },
     {
        accessorKey: "stock",
        header: "Stock"
    },
     {
        accessorKey: "category",
        header: "Category"
    },
     {
        accessorKey: "price",
        header: "Price",
        cell:({row}) => `$${row.original.price}`
    },
]

