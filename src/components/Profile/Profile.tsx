import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../store/store";
import CircularProgress from "@mui/material/CircularProgress";
import {Navigate} from "react-router-dom";

type ProfilePagePropsType = {
    profile: ProfileResponseType | null
    isFetching: boolean
    isAuth: boolean
}

export const Profile: React.FC<ProfilePagePropsType> = ({profile, isAuth, isFetching}: ProfilePagePropsType) => {
        if (!isAuth) return <Navigate to='/login'/>
        return (
            <>
                {isFetching
                    ? <CircularProgress />
                    : <div className={styles.content}>
                        <ProfileInfo profile={profile}/>
                        <MyPostsContainer/>
                    </div>}
            </>
        );
    }
;
