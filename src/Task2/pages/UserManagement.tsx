import { useState } from "react"
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

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  const handleAddUser = (newUser: Users) => {
    setUsers((prev) => [newUser, ...prev])
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
        {
          filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))
        }
        <AddUserModal
          open={open}
          onOpenChange={setOpen}
          onAddUser={handleAddUser}
        />
      </div>
    </div>
  )
}
