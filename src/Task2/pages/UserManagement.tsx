import { useState, useOptimistic } from "react"
import type { Users } from "../types/users"
import { USERS } from "../data/users"
import { User } from "../Component/User"
import { SearchBar } from "../Component/SearchBar"
import { AddUserModal } from "../Component/AddUserModal"
import { Button } from "../../components/ui/button"

export function UserManagement() {
  const [users, setUsers] = useState<Users[]>(USERS)
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  const [optimisticUsers, addOptimisticUser] =
    useOptimistic<Users[], Users>(
      users,
      (state, newUser) => [newUser, ...state]
    )
  const filteredUsers = optimisticUsers.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  const handleAddUser = (user: Users) => {
    addOptimisticUser(user)
    setUsers((prev) => [user, ...prev])
  }

  return (
    <div className="p-6 space-y-6">
      <div className="justify-between items-center flex">
        <h1 className="text-2xl font-bold mb-6">
          User Management
        </h1>
        <Button
          onClick={() => setOpen(true)}
        >
          + Add User
        </Button>
      </div>
      <SearchBar value={search} onChange={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))
        ) : (
          <p className="text-muted-foreground">
            No users found
          </p>
        )}
        <AddUserModal
          open={open}
          onOpenChange={setOpen}
          onAddUser={handleAddUser}
        />
      </div>
    </div>
  )
}
