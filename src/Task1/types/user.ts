export interface User {
    id: UUID
    fullName: string
    email: string
    phone: string
    gender: "male" | "female"
    country: string
    city: string
    picture: string 
    dateOfBirth: string
}