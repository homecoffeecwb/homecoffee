import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { DialogActions } from '@mui/material';
import { Dialog } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { api } from '../../../api';
import { Product } from '../../../common/contexts/productsContext';
import { useCurrencyMask } from '../../../common/hooks/useCurrencyMask';
import { useProducts } from '../../../common/hooks/useProducts';
import { useColors } from '../../../hooks/useColors';

interface ProductModalProps {
    product: Product
    open: boolean
    setOpen: (value:boolean) => void
}

interface formValues {
    name: string
    description: string
    price: string
}

export const ProductModal:React.FC<ProductModalProps> = ({ product, open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const currencyMask = useCurrencyMask()
    const colors = useColors()
    const { refreshProducts } = useProducts()

    const initialValues:formValues = {
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price?.toString() || ''
    }

    const handleSubmit = (values:formValues) => {
        api.post('/products/update', {...values, id: product.id})
        .then(response => setOpen(false))
        .catch(error => console.error(error))
        .finally(() => refreshProducts())
    }
    
    return (
        <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{style:{width: '100%', backgroundColor: colors.background}}}
            // disableEscapeKeyDown={true}
            // hideBackdrop={true}
            
        >
            <DialogTitle>Editar produto</DialogTitle>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({values, handleChange}) => 
                <Form style={{display: 'contents'}} >
                <DialogContent sx={{flexDirection: 'column'}}>
                    <TextField label='Nome' id='name' value={values.name} onChange={handleChange} variant='standard' />
                    <TextField label='Descrição' id='description' value={values.description} onChange={handleChange} variant='standard' />
                    <MaskedInput
                        mask={currencyMask}
                        id='price'
                        value={values.price}
                        onChange={handleChange}
                        render={(ref, props) => (
                        <TextField
                            inputRef={ref}
                            {...props}
                            label='Preço'
                            variant='standard'
                            inputProps={{inputMode: 'numeric'}}
                        />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button type='submit' variant='contained' sx={{width: '100%'}} >{loading ? 
                    <CircularProgress size={24} />
                        : 'OK'}</Button>
                </DialogActions>
            </Form>}
            </Formik>
        </Dialog>
    )
}