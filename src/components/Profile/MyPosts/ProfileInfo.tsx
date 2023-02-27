import React from 'react';
import styles from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../store/store";

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    // if (!props.profile) {
    //     <Preloader/>
    // } else {
    return (
        <div className={styles.profileInfo}>
            <img
                src={'https://a-static.besthdwallpaper.com/kosmos-nauchnaya-fantastika-2-oboi-1920x600-86301_57.jpg'}
                alt={'wallpaper'}/>
            <div className={styles.description}>
                <div>
                    <img src={props.profile?.photos.large} alt="" className={styles.avatar}/>
                </div>
                <div className="description">
                    <h3>{props.profile?.fullName}</h3>
                    <span>{props.profile?.aboutMe}</span>
                    <p>{props.profile?.contacts.facebook}</p>
                    <p>{props.profile?.contacts.github}</p>
                    <p>{props.profile?.contacts.instagram}</p>
                </div>
            </div>
        </div>
    );
    // }
};
