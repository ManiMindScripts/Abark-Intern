import { useState, useTransition } from "react";
import type { Users } from "../types/users";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"


interface AddUserModalPropos {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddUser: (users: Users) => void
}
const AddUserModal: React.FC<AddUserModalPropos> = (props) => {
  const { open, onOpenChange, onAddUser } = props
  const [isPending, startTransition] = useTransition()
  const [form, setForm] = useState<Omit<Users, "id">>({
    name: "",
    email: "",
    role: "user",
    status: "active",
  })

  const handleSubmit = () => {
    if (!form.name || !form.email) return

    startTransition(() => {
      onAddUser({
        id: Date.now(), // this is for unique id..
        ...form,
      })
      onOpenChange(false)
    })
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <Input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <Select
          value={form.role}
          onValueChange={(value) =>
            setForm({
              ...form,
              role: value as Users["role"],
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={form.status}
          onValueChange={(value) =>
            setForm({
              ...form,
              status: value as Users["status"],
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button onClick={handleSubmit} disabled={isPending}>
            {isPending ? "Adding..." : "Add User"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default AddUserModal