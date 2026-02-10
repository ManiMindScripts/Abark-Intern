import type { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "../types/product.type"

type Props = {
    table: Table<Product>
}

export function TablePagination({ table }: Props) {
    return (
        <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-600">
                    Rows per page:
                </span>

                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) =>
                        table.setPageSize(Number(e.target.value))
                    }
                    className="border px-2 py-1 rounded"
                >
                    {[5, 10, 20].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex items-center justify-between mt-6">
                {/* Page Info */}
                <p className="text-sm text-gray-600">
                    Page{" "}
                    <strong>
                        {table.getState().pagination.pageIndex + 1}
                    </strong>{" "}
                    of{" "}
                    <strong>{table.getPageCount()}</strong>
                </p>

                {/* Controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="p-2 border rounded disabled:opacity-50"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="p-2 border rounded disabled:opacity-50"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}