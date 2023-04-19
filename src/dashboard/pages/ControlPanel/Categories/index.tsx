import React, { useEffect } from 'react';
import './style.scss';
import { useHeader } from '../../../hooks/useHeader';

interface CategoriesProps {
    
}

export const Categories:React.FC<CategoriesProps> = ({  }) => {
    
    const header = useHeader()

    useEffect(() => {
        header.setTitle('Categorias')
    }, [])

    return (
        <div className='Categories-Page' >
            
        </div>
    )
}