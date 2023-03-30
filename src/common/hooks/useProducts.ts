import { useContext } from 'react'
import { api } from '../../api';
import ProductsContext from '../contexts/productsContext'

export const useProducts = () => {
    const productsContext = useContext(ProductsContext);

    const refreshProducts = () => {
        api.get('/products')
        .then(response => productsContext.setValue(response.data))
        .catch(error => console.error(error))
    }

    return {products: productsContext.value, setProducts: productsContext.setValue, refreshProducts}
}