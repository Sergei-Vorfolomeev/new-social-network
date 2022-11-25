import React from 'react';
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src='https://w7.pngwing.com/pngs/619/305/png-transparent-saturn-planet-earth-solar-system-planet-yellow-jupiter-orange-yellow-flowers-yellow-light.png'
                alt='logo'/>
        </header>
    );
};
