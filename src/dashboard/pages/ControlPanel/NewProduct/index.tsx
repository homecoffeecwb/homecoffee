import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { useCurrencyMask } from '../../../../common/hooks/useCurrencyMask';
import './style.scss';

interface formValues {
    name: string
    description: string
    price: string
}

export const NewProduct = () => {
    const currencyMask = useCurrencyMask()
    const navigate = useNavigate()

    const initialValues:formValues = {
        name: '',
        description: '',
        price: ''
    }

    const handleSubmit = (values:formValues) => {
        alert(JSON.stringify(values, null, 4))
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
                        />
                        )}
                    />
                    <Button type='submit' variant='contained' >Cadastrar</Button>
                    <Button onClick={() => navigate('/dashboard/panel')} variant='outlined' >Cancelar</Button>
                </Form>}

            </Formik>
        </div>
    )
}