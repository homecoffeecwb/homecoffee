import React from 'react';
import { Category } from '../../../../../common/contexts/categoriesContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Paper } from '@mui/material';

interface CategoryContainerProps {
    category: Category
    open?: boolean
}

export const CategoryContainer:React.FC<CategoryContainerProps> = ({ category, open }) => {
    
    return (
        <Paper elevation={1} className='CategoryContainer-Component'>
            <ArrowForwardIosIcon sx={open ? {transform: 'rotate(90deg)'} : null} />
            <h2>{category.name}</h2>
        </Paper>
    )
}