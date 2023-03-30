import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { CircularProgress } from "@mui/material"
import { Formik, Form } from 'formik';
import type { FormikHelpers } from 'formik';
import { api } from '../../../api';
import './style.scss';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

interface formValues {
    user: string
    password: string
}

export const Login = () => {
    const [loading, setLoading] = useState(false)

    const { setUser } = useUser()
    const navigate = useNavigate()

    const initialValues:formValues = {
        user: '',
        password: ''
    }

    const handleSubmit = React.useCallback((values:formValues, helpers: FormikHelpers<formValues>) => {
        if (loading) return;
        setLoading(true)

        api.post('/login', values)
        .then(response => {
            if(response.data) {
                setUser(response.data)
                navigate('/dashboard/panel')
            }
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [loading])
    
    return (
        <div className='Login-Page' >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({values, handleChange}) => 
                <Form>
                    <h2>painel de controle</h2>
                    <TextField label='usuário ou e-mail' id='user' value={values.user} onChange={handleChange} />
                    <TextField label='senha' type='password' id='password' value={values.password} onChange={handleChange} />
                    <Button type='submit' variant="contained" >
                        {
                            loading ?
                            <CircularProgress size={'7vw'} color={'secondary'} />
                            :
                            <>Entrar</>
                        }
                    </Button>
                </Form>}
            </Formik>
        </div>
    )
}