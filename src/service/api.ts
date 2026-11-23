import axios from "axios";
import secureLocalStorage from "react-secure-storage"

const apiLocal = process.env.HOST_API
export const token_key = process.env.TOKEN_JWT || ""
export const api = axios.create({
    baseURL: apiLocal,
    timeout: 1000
})

api.interceptors.request.use(async (config) => {
    const token = secureLocalStorage.getItem("Token")
    if(token)
        config.headers.Authorization = "Bearer " + token
    return config
})

