import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.css'
import {logInTC} from "../../store/authReducer";
import {useAppDispatch} from "../../store/store";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
});

export const Login = () => {
    const dispatch = useAppDispatch()
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    return (
        <div className={styles.login}>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false}}
                validationSchema={SignupSchema}
                onSubmit={(values, {resetForm}) => {
                    dispatch(logInTC(values));
                    resetForm()
                }}>

                <Form className={styles.form}>
                    <div className={styles.email}>
                        <Field name="email" type="email"/>
                        <label htmlFor="email">Email</label>
                        <div><ErrorMessage name="email"/></div>
                    </div>

                    <div className={styles.password}>
                        <Field name="password" type="password"/>
                        <label htmlFor="password">Password</label>
                        <div><ErrorMessage name="password"/></div>
                    </div>

                    <div className={styles.rememberMe}>
                        <Field name="rememberMe" type="checkbox"/>
                        <label htmlFor="rememberMe">Remember me</label>
                        <div><ErrorMessage name="rememberMe"/></div>
                    </div>

                    <button type="submit" className={styles.btn}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

