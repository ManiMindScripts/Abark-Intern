import { useEffect, useState } from "react"
import type {User } from "../types/user"
import type { RandomUserApiResponse } from "../types/api"
import { UserCard } from "../component/UserCard"

export default function User() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=12")

        if (!res.ok) {
          throw new Error("Failed to fetch users")
        }

        const data: RandomUserApiResponse = await res.json()

        const mappedUsers: User[] = data.results.map((u) => ({
          id: u.login.uuid,
          fullName: `${u.name.first} ${u.name.last}`,
          email: u.email,
          phone: u.phone,
          gender: u.gender,
          country: u.location.country,
          city: u.location.city,
          picture: u.picture.large,
          dateOfBirth: u.dateOfBirth
        }))

        setUsers(mappedUsers)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <p className="text-center mt-10">Loading users...</p>
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Random Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
