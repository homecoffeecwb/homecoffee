import React, { useEffect, useState } from 'react';
import './style.scss';
import { useHeader } from '../../../hooks/useHeader';
import { useCategories } from '../../../../common/hooks/useCategories';
import Collapsible from 'react-collapsible';
import { CategoryContainer } from './CategoryContainer';
import { SubcategoryContainer } from './SubcategoryContainer';
import { Button } from '@mui/material';
import { CategoryModal } from './CategoryModal';
interface CategoriesProps {
    
}

export const Categories:React.FC<CategoriesProps> = ({  }) => {
    
    const header = useHeader()
    const { categories } = useCategories()

    const [newCategoryModal, setNewCategoryModal] = useState(false)

    useEffect(() => {
        header.setTitle('Categorias')
    }, [])

    return (
        <div className='Categories-Page' >
            {categories.map(category => 
            <Collapsible key={category.id} 
                trigger={<CategoryContainer category={category} />}
                triggerWhenOpen={<CategoryContainer category={category} open />}
                >
                    {category.subcategories.map(subcategory => <SubcategoryContainer key={subcategory.id} subcategory={subcategory} />)}
                    <Button variant='outlined' >+</Button>
            </Collapsible>)}
            <Button variant='contained' onClick={() => setNewCategoryModal(true)} >nova categoria</Button>
            <CategoryModal open={newCategoryModal} setOpen={setNewCategoryModal} />
        </div>
    )
}
