import { createContext, useState } from 'react';
import React from 'react';
import { useEffect } from 'react';

export interface Product {
    id: number
    name: string
    description: string
    price: number | string
    category: number
    subcategory: number
}

interface ProductsContextValue {
    value: Product[];
    setValue: (value:Product[]) => void;
}

interface ProductsProviderProps {
    children: React.ReactNode
}

const ProductsContext = createContext<ProductsContextValue>({} as ProductsContextValue);

export default ProductsContext;

export const ProductsProvider:React.FC<ProductsProviderProps> = ({children}) => {
    const [value, setValue] = useState<Product[]>([])

    useEffect(() => {
        console.log({productList: value})
    }, [value])

    return (
         <ProductsContext.Provider value={{value, setValue}}>
              {children}
         </ProductsContext.Provider>
    )
}