import {
    useReactTable, getCoreRowModel,
    flexRender, getSortedRowModel, getPaginationRowModel, getFilteredRowModel
} from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
import { useProducts } from "../hooks/useProducts";
import { productColumns } from "../columns/productColumns";
import { useState } from "react";
import { TablePagination } from "./TablePagination";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

interface ProductsTableProps {
  globalFilter: string
}

export function ProductsTable({ globalFilter }: ProductsTableProps) {
    const { data = [], isLoading, isError } = useProducts()
    const [sorting, setSorting] = useState<SortingState>([])
    

    const table = useReactTable({
        data,
        columns: productColumns,
        state: {
            sorting,
            globalFilter
        },
        onSortingChange: setSorting,
    
        getSortedRowModel: getSortedRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something Went Wrong</p>

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}
                                        className="border px-4 py-2 text-left cursor-pointer select-none"
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        <div className="flex items-center gap-2">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: <ArrowUp className="w-4 h-4" />,
                                                desc: <ArrowDown className="w-4 h-4" />,
                                            }[header.column.getIsSorted() as string] ?? (
                                                    <ArrowUpDown className="w-4 h-4 text-gray-400" />
                                                )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}
                                        className="border px-4 py-2"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
               <TablePagination table={table}/>
            </div>
        </>
    )
}