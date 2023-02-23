import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            {/*<img*/}
            {/*    src="https://pngimg.com/uploads/alien/alien_PNG22.png"*/}
            {/*    alt='logo'/>*/}
            <img
                src="https://pngimg.com/uploads/alien/alien_PNG21.png"
                alt='logo'/>
            <NavLink to={'/login'} className={styles.login}>Login</NavLink>
        </header>
    );
};


