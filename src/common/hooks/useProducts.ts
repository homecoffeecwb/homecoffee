import { useContext } from 'react'
import ProductsContext, { Product } from '../contexts/productsContext'
import { useApi } from './useApi';

export const useProducts = () => {
    const productsContext = useContext(ProductsContext);
    const api = useApi()

    const refreshProducts = () => {
        api.products.get((response: { data: Product[] }) => productsContext.setValue(response.data), (error: any) => console.error(error))
    }

    return {products: productsContext.value, setProducts: productsContext.setValue, refreshProducts}
}