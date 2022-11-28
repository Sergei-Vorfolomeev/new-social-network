import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {GeneralACType, ProfilePageType} from "../../redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: GeneralACType) => void
}

export const Profile:React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={(action) => props.dispatch(action)}/>
        </div>
    );
};
