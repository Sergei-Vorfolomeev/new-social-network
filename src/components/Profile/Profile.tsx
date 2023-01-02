import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {ProfilePageType} from "../../redux/store-redux";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store-redux";

type ProfilePagePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: GeneralACType) => void
}

export const Profile:React.FC<ProfilePagePropsType> = (props) => {

    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch()

    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
};
