import { TextField } from '@mui/material';
import { Paper } from '@mui/material';
import React from 'react';
import type { Product } from '../../../../../common/contexts/productsContext';
import MaskedInput from 'react-text-mask';
import './style.scss';
import { useCurrencyMask } from '../../../../../common/hooks/useCurrencyMask';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { ProductModal } from '../../../../components/ProductModal';
import { useState } from 'react';
import { useColors } from '../../../../../hooks/useColors';
import { api } from '../../../../../api';
import { useProducts } from '../../../../../common/hooks/useProducts';
import { useSnackbar } from '../../../../hooks/useSnackbar';

interface ProductsContainerProps {
    product: Product
}

export const ProductContainer:React.FC<ProductsContainerProps> = ({ product }) => {
    const colors = useColors()
    const { refreshProducts } = useProducts()
    const snackbar = useSnackbar()
    
    const [editModal, setEditModal] = useState(false)

    const editProduct = () => {
        setEditModal(true)
    }

    const deleteProduct = () => {
        api.post('/products/delete', product)
        .then(response => {
            snackbar.setText(`produto ${product.name} deletado!`)
            snackbar.setSeverity('warning')
            snackbar.setOpen(true)
        })
        .catch(error => console.error(error))
        .finally(() => refreshProducts())
    }
    
    return (
        <div className='ProductContainer-Component' >
            <Paper elevation={1} className='main-container' >
                <div className="info">
                    <p>{product.name}</p>
                    <p style={{color: colors.primary2}}>R$ {product.price}</p>
                </div>
                
                <div className="actions">
                    <IconButton color='primary' onClick={() => editProduct()} >
                        <EditIcon />
                    </IconButton>
                    <IconButton color='primary' onClick={() => deleteProduct()} >
                        <DeleteIcon color='error' /> 
                    </IconButton>
                </div>
            </Paper>
            <ProductModal product={product} open={editModal} setOpen={setEditModal} />
        </div>
    )
}