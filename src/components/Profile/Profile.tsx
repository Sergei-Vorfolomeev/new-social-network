import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {ProfilePageType} from "../../index";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
}

export const Profile:React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    );
};
