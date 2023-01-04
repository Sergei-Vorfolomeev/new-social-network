import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePagePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: GeneralACType) => void
}

export const Profile:React.FC<ProfilePagePropsType> = (props) => {

    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};
