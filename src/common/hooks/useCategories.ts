import { useContext } from 'react'
import CategoriesContext from '../contexts/categoriesContext'

export const useCategories = () => {
    const categoriesContext = useContext(CategoriesContext);

    return {categories: categoriesContext.value, setCategories: categoriesContext.setValue}
}