import { Button } from '@mui/material';
import { MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { api } from '../../../../api';
import { useCategories } from '../../../../common/hooks/useCategories';
import { useCurrencyMask } from '../../../../common/hooks/useCurrencyMask';
import './style.scss';

interface formValues {
    name: string
    description: string
    price: string
    category: number
}

export const NewProduct = () => {
    const currencyMask = useCurrencyMask()
    const navigate = useNavigate()
    const categories = useCategories()

    const initialValues:formValues = {
        name: '',
        description: '',
        price: '',
        category: 0
    }

    const handleSubmit = (values:formValues) => {
        api.post('/products/new', values)
        .then(response => {
            navigate('/dashboard/panel')
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div className='NewProduct-Component' >
            <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                {({values, handleChange}) => 
                <Form>
                    <h3 style={{textAlign: 'center'}}>Cadastrar novo produto</h3>
                    <TextField label='Nome' id='name' value={values.name} onChange={handleChange} />
                    <TextField label='Descrição' id='description' value={values.description} onChange={handleChange} />
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
                            inputProps={{inputMode: 'numeric'}}
                        />
                        )}
                    />
                    <TextField select id='category' name='category' label='Categoria' onChange={handleChange} value={values.category} >
                        {categories.map(category => <MenuItem key={category.id}
                            value={category.id}
                            style={{width: '100%'}}
                        >{category.name}</MenuItem>)}
                    </TextField>

                    <Button type='submit' variant='contained' >Cadastrar</Button>
                    <Button onClick={() => navigate('/dashboard/panel')} variant='outlined' >Cancelar</Button>
                </Form>}

            </Formik>
        </div>
    )
}