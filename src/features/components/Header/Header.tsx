import React from 'react';
import styles from './Header.module.scss'
import {NavLink} from "react-router-dom";
import logo from 'common/assets/img/logo.png'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = ({isAuth, login, logout}: HeaderPropsType) => {

    const logOutHandler = () => {
        logout()
    }

    return (
        <header className={styles.header}>
            {/*<img*/}
            {/*    src="https://pngimg.com/uploads/alien/alien_PNG22.png"*/}
            {/*    alt='logo'/>*/}
            <img
                src={logo}
                alt='logo'/>
            {isAuth
                ? <div className={styles.name}>{login}<button onClick={logOutHandler}>Logout</button></div>
                : <NavLink to={'/login'} className={styles.login}>Login</NavLink>
            }
        </header>
    );
};


