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

interface ProductsContainerProps {
    product: Product
}

export const ProductContainer:React.FC<ProductsContainerProps> = ({ product }) => {
    const currencyMask = useCurrencyMask()
    
    return (
        <div className='ProductContainer-Component' >
            <Paper elevation={1} className='main-container' >
                <div className="info">
                    <p>{product.name}</p>
                    <p style={{fontWeight: 'bold'}}>R$ {product.price}</p>
                </div>
                {/* <MaskedInput
                    mask={currencyMask}
                    render={(ref, props) => (
                        <TextField
                            inputRef={ref}
                            {...props}
                            className='price-container'
                            size='small'
                            inputProps={{style:{padding: '1vw', textAlign: 'center'}}}
                        />
                    )}
                /> */}
                <div className="actions">
                    <IconButton color='primary' >
                        <EditIcon />
                    </IconButton>
                    <IconButton color='primary' >
                        <DeleteIcon color='error' /> 
                    </IconButton>
                </div>
            </Paper>
        </div>
    )
}