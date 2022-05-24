import React from 'react'
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import Input from './Input';
import PasswodInput from './PasswordInput';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../styles/Input.css'
import '../styles/Form.css'
import { colors } from '../theme/theme';
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
    password: Yup.string().min(6, 'Demasiado corto').max(50, 'Demasiado largo').required('Este campo es obligatorio'),
});


function LoginForm() {
    const matches = useMediaQuery('(min-width:768px)');
    const buttonWidth = { width: matches ? '200px' : '400px' };

    const submitHandler = (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <section className='form-container'>
            <header>
                <h1 className='title'>Iniciar Sesión</h1>
            </header>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={submitHandler}
                validationSchema={SignupSchema}
            >

                {({ isValid, dirty, touched, errors }) => (
                    <Form className='login-form'>
                        <Input type="email" name="email" label="Correo electrónico" error={errors['email'] && touched['email']} />
                        <PasswodInput label='Contraseña' name='password' error={errors['password'] && touched['password']} />
                        <Button type='submit' disabled={!isValid || !dirty} variant="contained" sx={{ textTransform: 'none', height: '40px', bgcolor: colors.primary, mt: '2rem', buttonWidth }} fullWidth>
                            Ingresar
                        </Button>
                        <Link
                            to='/signin'
                            style={{textDecoration: 'none'}}
                        >
                            <p className='font-sm'>¿Aún no tienes cuenta? <a href='#'>Registrate</a> </p>
                        </Link> 
                    </Form>
                )}
            </Formik>
        </section >)
}

export default LoginForm