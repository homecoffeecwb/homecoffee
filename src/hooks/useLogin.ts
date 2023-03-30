import { api } from "../api"

interface loginData {
    name: string
    password: string
}

export const useLogin = () => {
    const login = (data:loginData) => {
        api.post('/login', data)
    }
}