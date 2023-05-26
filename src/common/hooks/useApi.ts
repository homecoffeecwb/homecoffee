import { apiAxios as axios } from "../../api"
import { Product } from "../contexts/productsContext"

interface loginValues {
    user: string
    password: string
}

interface newProductValues {
    name: string
    description: string
    price: string
    category: number
}

interface newCategoryValues {
    name: string
}

export const useApi = () => {
    const api = {
        login: (data:loginValues, callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
            axios.post('/login', data)
            .then(response => callback(response))
            .catch(error => errorCallback(error))
            .finally(() => finallyCallback())
        },

        products: {
            get: (callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
                axios.get('/products')
                .then(response => callback(response))
                .catch(error => errorCallback(error))
                .finally(() => finallyCallback())
            },
            update: (data:Product, callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
                axios.post('/products/update', data)
                .then(response => callback(response))
                .catch(error => errorCallback(error))
                .finally(() => finallyCallback())
            },
            delete: (data:Product, callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
                axios.post('/products/delete', data)
                .then(response => callback(response))
                .catch(error => errorCallback(error))
                .finally(() => finallyCallback())
            },
            new: (data:newProductValues, callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
                axios.post('/products/new', data)
                .then(response => callback(response))
                .catch(error => errorCallback(error))
                .finally(() => finallyCallback())
            },
        },

        categories: {
            get: (callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
                axios.get('/categories')
                .then(response => callback(response))
                .catch(error => errorCallback(error))
                .finally(() => finallyCallback())
            },
            new: (data:newCategoryValues, callback:Function, errorCallback:Function = (error: any) => console.error(error), finallyCallback:Function = () => null) => {
                axios.post('/categories/new', data)
                .then(response => callback(response))
                .catch(error => errorCallback(error))
                .finally(() => finallyCallback())
            },
        }
    }

    return api
}