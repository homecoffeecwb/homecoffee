import React, { useState } from 'react';
import { Category } from '../../../../../common/contexts/categoriesContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CategoryModal } from '../CategoryModal';

interface CategoryContainerProps {
    category: Category
    open?: boolean
    modal: (category:Category) => void
}

export const CategoryContainer:React.FC<CategoryContainerProps> = ({ category, open, modal }) => {

    const [openModal, setOpenModal] = useState(false)

    const editCategory = () => {
        modal(category)
    }
    
    return (
        <Paper elevation={1} className='CategoryContainer-Component'>
            <ArrowForwardIosIcon sx={open ? {transform: 'rotate(90deg)'} : null} />
            <h2>{category.name}</h2>

            <div className="actions">
                <IconButton color='primary' onClick={editCategory} >
                    <EditIcon />
                </IconButton>
                <IconButton color='primary' onClick={() => null} >
                    <DeleteIcon color='error' /> 
                </IconButton>
            </div>

        </Paper>
    )
}