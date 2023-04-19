import { createContext, useState } from 'react';
import React, { useEffect } from 'react';
import { useApi } from '../hooks/useApi';

export interface Category {
    id: number
    name: string 
}

interface CategoriesContextValue {
    value: Category[]
    setValue: (value:Category[]) => void;
}

interface CategoriesProviderProps {
    children: React.ReactNode
}

const CategoriesContext = createContext<CategoriesContextValue>({} as CategoriesContextValue);

export default CategoriesContext;

export const CategoriesProvider:React.FC<CategoriesProviderProps> = ({children}) => {
    const [value, setValue] = useState<Category[]>([])
    const api = useApi()

    useEffect(() => {
        api.categories.get((response: { data: Category[] }) => setValue(response.data))
    }, [])

    return (
         <CategoriesContext.Provider value={{value, setValue}}>
              {children}
         </CategoriesContext.Provider>
    )
}