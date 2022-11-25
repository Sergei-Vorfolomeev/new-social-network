import React from 'react';
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <img
                src={'https://a-static.besthdwallpaper.com/kosmos-nauchnaya-fantastika-2-oboi-1920x600-86301_57.jpg'}
                alt={'wallpaper'}/>
            <div className={styles.description}>
                ava + description
            </div>
        </div>
    );
};
