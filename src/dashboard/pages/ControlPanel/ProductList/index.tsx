import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../../common/hooks/useProducts';
import { ProductContainer } from './ProductContainer';
import './style.scss';

export const ProductList = () => {
    const {products, refreshProducts} = useProducts()

    const navigate = useNavigate()

    useEffect(() => {
        refreshProducts()
    }, [])
    
    return (
        <div className='ProductList-Component' >
            <Button variant='contained' onClick={() => navigate('/dashboard/panel/novo')} >novo produto</Button>
            <div className="list-container">
                {products.map(product => <ProductContainer key={product.id} product={product} />)}
            </div>
        </div>
    )
}