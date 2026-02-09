import axios from "axios";



export const api = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json"
    }
})
api.interceptors.request.use((config) => {
    console.log("Request:", config.url)
    return config
},
    (error) => Promise.reject(error)
)
api.interceptors.response.use((response) => response,
    (error) => {
        if (error.response) {
            console.error("Api error", error.response.status, error.response.data)
        } else {
            console.log("Network Error")
        }
        return Promise.reject(error)
    }
)