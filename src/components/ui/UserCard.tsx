import { Card } from "../ui/card"
import {
  Mail,
  Phone,
  MapPin,
  UserCircle,
} from "lucide-react"
import { useState } from "react"
import type { User } from "../../types/user"

interface UserCardProps {
  user: User
}

type HoverInfo = "email" | "phone" | "location" | "gender"

export function UserCard({ user }: UserCardProps) {
  const [activeInfo, setActiveInfo] = useState<HoverInfo>("location")

  const infoTextMap: Record<HoverInfo, string> = {
    email: user.email,
    phone: user.phone,
    location: `${user.city}, ${user.country}`,
    gender: user.gender.toUpperCase(),
  }

  return (
    <Card className="w-72 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl">
      {/* Avatar */}
      <div className="flex justify-center -mt-8 mb-4">
        <img
          src={user.picture}
          alt={user.fullName}
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Name */}
      <h2 className="text-lg font-bold">{user.fullName}</h2>

      {/* Dynamic Info Area */}
      <p className="mt-2 min-h-[20px] text-sm text-muted-foreground transition-all duration-300">
        {infoTextMap[activeInfo]}
      </p>

      {/* Icon Actions */}
      <div className="mt-6 flex justify-center gap-6">
        <Mail
          className="w-5 h-5 cursor-pointer text-blue-500 hover:scale-110 transition"
          onMouseEnter={() => setActiveInfo("email")}
        />

        <Phone
          className="w-5 h-5 cursor-pointer text-green-500 hover:scale-110 transition"
          onMouseEnter={() => setActiveInfo("phone")}
        />

        <MapPin
          className="w-5 h-5 cursor-pointer text-red-500 hover:scale-110 transition"
          onMouseEnter={() => setActiveInfo("location")}
        />

        <UserCircle
          className="w-5 h-5 cursor-pointer text-purple-500 hover:scale-110 transition"
          onMouseEnter={() => setActiveInfo("gender")}
        />
      </div>
    </Card>
  )
}
