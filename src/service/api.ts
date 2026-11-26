import axios from "axios";
import secureLocalStorage from "react-secure-storage"

const apiLocal = "https://localhost:7232/api/v1"
export const token_key = process.env.TOKEN_JWT || "Token"
export const api = axios.create({
    baseURL: apiLocal,
    timeout: 1000
})

console.log(apiLocal)

api.interceptors.request.use(async (config) => {
    const token = secureLocalStorage.getItem("Token")
    if(token)
        config.headers.Authorization = `Bearer ${token}`
    return config
})

