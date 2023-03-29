import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import './style.scss';

interface formValues {
    user: string
    password: string
}

export const Login = () => {

    const initialValues:formValues = {
        user: '',
        password: ''
    }

    const handleSubmit = (values:formValues) => {
        console.log(values)
    }
    
    return (
        <div className='Login-Page' >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({values, handleChange}) => 
                <Form>
                    <h2>painel de controle</h2>
                    <TextField label='usuário ou e-mail' id='user' value={values.user} onChange={handleChange} />
                    <TextField label='senha' id='password' value={values.password} onChange={handleChange} />
                    <Button>Entrar</Button>
                </Form>}
            </Formik>
        </div>
    )
}