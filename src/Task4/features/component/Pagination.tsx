interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null // no need to show pagination

  return (
    <div className="flex justify-center gap-2 mt-6">
      {/* Prev button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page numbers */}
      {[...Array(totalPages)].map((_, idx) => {
        const pageNum = idx + 1
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-3 py-1 border rounded ${
              currentPage === pageNum ? "bg-black text-white" : ""
            }`}
          >
            {pageNum}
          </button>
        )
      })}

      {/* Next button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}