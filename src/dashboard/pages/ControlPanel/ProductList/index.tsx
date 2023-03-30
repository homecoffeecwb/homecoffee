import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useProducts } from '../../../../common/hooks/useProducts';
import { ProductContainer } from './ProductContainer';
import './style.scss';

export const ProductList = () => {
    const {products, setProducts, refreshProducts} = useProducts()

    useEffect(() => {
        refreshProducts()
    }, [])
    
    return (
        <div className='ProductList-Component' >
            <Button variant='contained' >novo produto</Button>
            <div className="list-container">
                {products.map(product => <ProductContainer key={product.id} product={product} />)}
            </div>
        </div>
    )
}