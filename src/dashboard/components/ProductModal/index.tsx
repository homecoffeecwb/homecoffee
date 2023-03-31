import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { TextField } from '@mui/material';
import { Alert } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Snackbar } from '@mui/material';
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
import { useCategories } from '../../../common/hooks/useCategories';
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
    category: number
}

export const ProductModal:React.FC<ProductModalProps> = ({ product, open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const currencyMask = useCurrencyMask()
    const colors = useColors()
    const { refreshProducts } = useProducts()
    const categories = useCategories()

    const initialValues:formValues = {
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price?.toString() || '',
        category: product?.category || 0,
    }

    const handleSubmit = (values:formValues) => {
        api.post('/products/update', {...values, id: product.id})
        .then(response => {
            console.log(response.data)
            setOpen(false)
            setSuccess(true)
            refreshProducts()
        })
        .catch(error => console.error(error))
    }
    
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{style:{width: '100%', backgroundColor: colors.background}}}
                // disableEscapeKeyDown={true}
                // hideBackdrop={true}
                
            >
                <DialogTitle>Editar produto</DialogTitle>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({values, handleChange}) => 
                    <Form style={{display: 'contents'}} >
                    <DialogContent sx={{flexDirection: 'column', gap: '2vw'}}>
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
                        <TextField select id='category' name='category' label='Categoria' onChange={handleChange} value={values.category} variant='standard' >
                            {categories.map(category => <MenuItem key={category.id}
                                value={category.id}
                                style={{width: '100%'}}
                            >{category.name}</MenuItem>)}
                        </TextField>

                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' variant='contained' sx={{width: '100%'}} >{loading ? 
                        <CircularProgress size={24} />
                            : 'OK'}</Button>
                    </DialogActions>
                </Form>}
                </Formik>
            </Dialog>
            <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={() => setSuccess(false)} severity={'success'} sx={{ width: '100%' }}>
                    {product.name} atualizado!
                </Alert>
            </Snackbar>
        </>
    )
}