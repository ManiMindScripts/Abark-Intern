export interface RandomUserApiResponse {
    results: RandomUserApiUser[]
    info: {
        seed: string
        results: number
        pages: number
        version: string
    }
}
export interface RandomUserApiUser {
    login: {
        uuid: string
    }
    name: {
        title: string
        first: string
        last: string
    }
    email: string
    phone: string
    dateOfBirth: string
    gender: "male" | "female"
    location: {
        country: string
        city: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }

}