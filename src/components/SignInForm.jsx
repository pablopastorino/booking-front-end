import React from 'react'
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik'

import useMediaQuery from '@mui/material/useMediaQuery';

import colors from '../configuration/colors.json'
import '../styles/Input.css'
import '../styles/Form.css'

function SignInForm() {
    const matches = useMediaQuery('(min-width:768px)');
    console.log(matches)
    const buttonWidth = { width: matches ? '200px' : '400px' };

    return (
        <section className='form-container'>
            <header>
                <h1 className='title'>Crear Cuenta</h1>
            </header>
            <Formik
                initialValues={{ name: '', lastName: '', email: '', password: '', confirmPassword: '' }}

                validate={values => {
                    const errors = {};

                    Object.keys(values).forEach(field => {
                        if (!values[field]) {
                            errors[field] = 'Required'
                        }
                    })


                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    return errors;

                }}

                onSubmit={(values, { setSubmitting }) => {

                    setTimeout(() => {

                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);

                    }, 400);

                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="full-name-container">
                            <div className="input-container">
                                <label className="input-label font-sm" htmlFor="name">Nombre</label>
                                <Field className='input-square font-sm' type="text" name="name" />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div className="input-container">
                                <label className="input-label font-sm" htmlFor="lastName">Apellido</label>
                                <Field className='input-square font-sm' type="text" name="lastName" />
                                <ErrorMessage name="lastName" component="div" />
                            </div>
                        </div>
                        <div className="input-container">
                            <label className="input-label font-sm" htmlFor="email">Correo electrónico</label>
                            <Field className='input-square font-sm' type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="input-container">
                            <label className="input-label font-sm" htmlFor="password">Contraseña</label>
                            <Field className='input-square font-sm' type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div className="input-container">
                            <label className="input-label font-sm" htmlFor="confirmPass">Confirmar contraseña</label>
                            <Field className='input-square font-sm' type="password" name="confirmPass" />
                            <ErrorMessage name="confirmPass" component="div" />
                        </div>
                        <Button type='submit' disabled={isSubmitting} variant="contained" sx={{ height: '40px', bgcolor: colors.PRIMARY, mt: '2rem', buttonWidth }} fullWidth>
                            Crear cuenta
                        </Button>
                        <p className='font-sm'>¿Ya tenes una cuenta? <a href='#'>Iniciar sesion</a> </p>
                    </Form>

                )}
            </Formik>
        </section >)
}

export default SignInForm