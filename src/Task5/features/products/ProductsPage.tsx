import { ProductsTable } from "./components/ProductTable";
import { TableSearch } from "./components/TableSearch";
import { useState } from "react";

export default function ProductsPage() {
    const [globalFilter, setGlobalFilter] = useState("")

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">
                Product Table
            </h1>
            <TableSearch value={globalFilter} onChange={setGlobalFilter}/>
            <ProductsTable globalFilter={globalFilter} />
        </div>
    )
}