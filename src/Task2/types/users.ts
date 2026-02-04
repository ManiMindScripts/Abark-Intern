export interface Users {
  id: number
  name: string
  email: string
  role: "admin" | "manager" | "user"
  status: "active" | "inactive"
}
