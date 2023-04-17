import React, {useEffect, useState} from 'react'

import {Form, Formik} from 'formik'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'

import {loginTC} from 'store/authReducer'
import s from 'features/components/Login/Login.module.scss'
import {CheckBoxInput} from './loginInputs/CheckBoxInput'
import {EmailInput} from './loginInputs/EmailInput'
import {PasswordInput} from './loginInputs/PasswordInput'

import {AppRootStateType, useAppDispatch} from 'app/store'


const SignupSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required field'),
    password: Yup.string()
        .max(25, 'Password must be 25 characters or less')
        .min(4, 'Password must be 4 characters or more')
        .required('Required field'),
})

export const Login = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [isHidden, setIsHidden] = useState<boolean>(true)

    const imgOnClickHandler = () => {
        setIsHidden(!isHidden)
    }

    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
        }
    }, [isAuth, navigate])

    return (
        <div className={s.mainContainer}>
            <div className={s.login}>

                <h2>Sign In</h2>

                <div className={s.formlabel}>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a> or use common test account credentials:</p>
                    <br/>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </div>

                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        dispatch(loginTC(values))
                    }}
                >
                    <Form>
                        <EmailInput />
                        <PasswordInput isHidden={isHidden} OnClick={imgOnClickHandler} />
                        <CheckBoxInput />
                        <button type="submit" onSubmit={e => e.preventDefault()} className={s.btn}>
                            Sign In
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}



















// import React from 'react';
// import {ErrorMessage, Field, Form, Formik} from 'formik';
// import * as Yup from 'yup';
// import styles from 'features/components/Login/Login.module.scss'
// import {logInTC} from "store/authReducer";
// import {AppRootStateType, useAppDispatch} from "app/store";
// import {useSelector} from "react-redux";
// import {ProfileContainer} from "features/components/Profile/ProfileContainer";
//
// const SignupSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string()
//         .min(2, 'Too Short!')
//         .max(30, 'Too Long!')
//         .required('Required'),
// });
//
// export const Login = () => {
//     const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
//     const dispatch = useAppDispatch()
//     // Pass the useFormik() hook initial form values and a submit function that will
//     // be called when the form is submitted
//     if (isAuth) return <ProfileContainer/>
//     return (
//         <div className={styles.login}>
//             <Formik
//                 initialValues={{email: '', password: '', rememberMe: false}}
//                 validationSchema={SignupSchema}
//                 onSubmit={(values, {resetForm}) => {
//                     dispatch(logInTC(values));
//                     resetForm()
//                 }}>
//
//                 <Form className={styles.form}>
//                     <div className={styles.email}>
//                         <Field name="email" type="email"/>
//                         <label htmlFor="email">Email</label>
//                         <div><ErrorMessage name="email"/></div>
//                     </div>
//
//                     <div className={styles.password}>
//                         <Field name="password" type="password"/>
//                         <label htmlFor="password">Password</label>
//                         <div><ErrorMessage name="password"/></div>
//                     </div>
//
//                     <div className={styles.rememberMe}>
//                         <Field name="rememberMe" type="checkbox"/>
//                         <label htmlFor="rememberMe">Remember me</label>
//                         <div><ErrorMessage name="rememberMe"/></div>
//                     </div>
//
//                     <button type="submit" className={styles.btn}>Submit</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }

