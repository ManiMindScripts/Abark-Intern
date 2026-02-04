import type { Users } from "../types/users"

interface UserCardProps {
  user: Users
}

export function User({ user }: UserCardProps) {
  return (
    <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{user.name}</h3>

      <p className="text-sm text-muted-foreground">
        {user.email}
      </p>

      <div className="mt-3 flex justify-between text-sm">
        <span className="capitalize">
          Role: <strong>{user.role}</strong>
        </span>

        <span
          className={`px-2 py-1 rounded-full text-xs ${
            user.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.status}
        </span>
      </div>
    </div>
  )
}
