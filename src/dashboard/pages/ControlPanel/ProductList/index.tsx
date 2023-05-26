import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '../../../../common/hooks/useCategories';
import { useProducts } from '../../../../common/hooks/useProducts';
import { ProductContainer } from './ProductContainer';
import './style.scss';
import { useHeader } from '../../../hooks/useHeader';

export const ProductList = () => {
    const {products, refreshProducts} = useProducts()
    const [category, setCategory] = useState(1)
    
    const { categories } = useCategories()
    const navigate = useNavigate()
    const header = useHeader()

    useEffect(() => {
        refreshProducts()
        header.resetTitle()

    }, [])
    
    return (
        <div className='ProductList-Component' >
            <Tabs
                value={category}
                // onChange={}
                textColor="primary"
                indicatorColor="primary"
                variant='fullWidth'
                >
                    {categories.map(item => <Tab value={item.id} label={item.name['PT']} key={item.id} onClick={() => setCategory(item.id)} sx={{fontWeight: 'bold'}} />)}
            </Tabs>
            <div className="list-container">
                {products.filter(product => product.category == category).map(product => <ProductContainer key={product.id} product={product} />)}
            </div>
            <Button variant='contained' onClick={() => navigate('/dashboard/panel/novo')} >novo produto</Button>
        </div>
    )
}
