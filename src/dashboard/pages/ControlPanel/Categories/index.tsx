import React, { useEffect } from 'react';
import './style.scss';
import { useHeader } from '../../../hooks/useHeader';
import { useCategories } from '../../../../common/hooks/useCategories';
import Collapsible from 'react-collapsible';
import { CategoryContainer } from './CategoryContainer';
import { SubcategoryContainer } from './SubcategoryContainer';

interface CategoriesProps {
    
}

export const Categories:React.FC<CategoriesProps> = ({  }) => {
    
    const header = useHeader()
    const { categories } = useCategories()

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
                    {category.subcategories.map(subcategory => <SubcategoryContainer subcategory={subcategory} />)}
            </Collapsible>)}
        </div>
    )
}