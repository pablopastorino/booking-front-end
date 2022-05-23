import React from 'react'
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import PasswodInput from '../components/PasswordInput'
import Input from '../components/Input'

import useMediaQuery from '@mui/material/useMediaQuery';

import colors from '../configuration/colors.json'
import '../styles/Input.css'
import '../styles/Form.css'

const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Demasiado corto').max(50, 'Demasiado largo').required('Este campo es obligatorio'),
    lastName: Yup.string().min(2, 'Demasiado corto').max(50, 'Demasiado largo').required('Este campo es obligatorio'),
    email: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
    password: Yup.string().min(6, 'Demasiado corto').max(50, 'Demasiado largo').required('Este campo es obligatorio'),
    confirmPassword: Yup.string().required('Este campo es obligatorio').oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});

function SignUpForm() {
    const initialValues = { name: '', lastName: '', email: '', password: '', confirmPassword: '' }

    const matches = useMediaQuery('(min-width:576px)');
    const styles = { width: matches ? '200px' : '400px' };
    const buttonStyles = { color: 'white', textTransform: 'none', height: '40px', bgcolor: colors.PRIMARY, mt: '2rem', buttonWidth: styles }


    const submitHandler = (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <section className='form-container' >
            <header>
                <h1 className='title'>Crear Cuenta</h1>
            </header>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={SignupSchema}
            >
                {({ isValid, dirty, touched, errors }) => (
                    <Form>
                        <div className="full-name-container">
                            <Input name="name" label="Nombre" error={errors['name'] && touched['name']} />
                            <Input name="lastName" label="Apellido" error={errors['lastName'] && touched['lastName']} />
                        </div>
                        <Input type="email" name="email" label="Correo electrónico" error={errors['email'] && touched['email']} />
                        <PasswodInput label='Contraseña' name='password' error={errors['password'] && touched['password']} />
                        <Input type="password" name="confirmPassword" label="Confirmar contraseña" error={errors['confirmPassword'] && touched['confirmPassword']} />
                        <Button type='submit' variant='contained' sx={buttonStyles} disabled={!isValid || !dirty} fullWidth>
                            Crear cuenta
                        </Button>
                        <p className='font-sm'>¿Ya tenes una cuenta? <a href='#'>Iniciar sesion</a> </p>
                    </Form>
                )}
            </Formik>
        </section >)
}

export default SignUpForm