import React, { useEffect, useState } from 'react';
import './style.scss';
import { useHeader } from '../../../hooks/useHeader';
import { useCategories } from '../../../../common/hooks/useCategories';
import Collapsible from 'react-collapsible';
import { CategoryContainer } from './CategoryContainer';
import { SubcategoryContainer } from './SubcategoryContainer';
import { Button } from '@mui/material';
import { CategoryModal } from './CategoryModal';
import { Category } from '../../../../common/contexts/categoriesContext';

interface CategoriesProps {
    
}

export const Categories:React.FC<CategoriesProps> = ({  }) => {
    
    const header = useHeader()
    const { categories } = useCategories()

    const [newCategoryModal, setNewCategoryModal] = useState(false)
    const [modalCategory, setModalCategory] = useState<Category|undefined>(undefined)

    useEffect(() => {
        setNewCategoryModal(true)
    }, [modalCategory])

    useEffect(() => {
        header.setTitle('Categorias')
    }, [])

    return (
        <div className='Categories-Page' >
            {categories.map(category => 
            <Collapsible key={category.id} 
                trigger={<CategoryContainer category={category} modal={setModalCategory} />}
                triggerWhenOpen={<CategoryContainer category={category} modal={setModalCategory} open />}
                >
                    {category.subcategories.map(subcategory => <SubcategoryContainer key={subcategory.id} subcategory={subcategory} />)}
                    <Button variant='outlined' >+</Button>
            </Collapsible>)}
            <Button variant='contained' onClick={() => setNewCategoryModal(true)} >nova categoria</Button>
            <CategoryModal open={newCategoryModal} setOpen={setNewCategoryModal} category={modalCategory} setCategory={setModalCategory} />
        </div>
    )
}