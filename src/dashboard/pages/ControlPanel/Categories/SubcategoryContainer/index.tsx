import React from 'react';
import { Subcategory } from '../../../../../common/contexts/categoriesContext';
import { Paper } from '@mui/material';

interface SubcategoryContainerProps {
    subcategory: Subcategory
}

export const SubcategoryContainer:React.FC<SubcategoryContainerProps> = ({ subcategory }) => {
    
    return (
        <Paper elevation={3} className='SubcategoryContainer-Component' >
            <p>{subcategory.name}</p>
        </Paper>
    )
}