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

export const ProductList = () => {
    const {products, refreshProducts} = useProducts()
    const [category, setCategory] = useState(0)
    
    const categories = useCategories()
    const navigate = useNavigate()

    useEffect(() => {
        refreshProducts()
    }, [])

    const changeTab = (value:any) => {
        setCategory(value)
    }
    
    return (
        <div className='ProductList-Component' >
            <Button variant='contained' onClick={() => navigate('/dashboard/panel/novo')} >novo produto</Button>
            <Tabs
                value={category}
                onChange={(event, value) => changeTab(value)}
                textColor="primary"
                indicatorColor="primary"
                variant='fullWidth'
                >
                    {categories.map(item => <Tab value={item.id} label={item.name} key={item.id} />)}
            </Tabs>
            <div className="list-container">
                {products.filter(product => product.category == category).map(product => <ProductContainer key={product.id} product={product} />)}
            </div>
        </div>
    )
}