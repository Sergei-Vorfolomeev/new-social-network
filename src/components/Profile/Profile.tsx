import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../store/store";
import CircularProgress from "@mui/material/CircularProgress";

type ProfilePagePropsType = {
    profile: ProfileResponseType | null
    isFetching: boolean
    status: string
}

export const Profile: React.FC<ProfilePagePropsType> = ({profile, isFetching ,status}: ProfilePagePropsType) => {
    debugger
        return (
            <>
                {isFetching
                    ? <CircularProgress />
                    : <div className={styles.content}>
                        <ProfileInfo profile={profile} status={status}/>
                        <MyPostsContainer/>
                    </div>}
            </>
        );
    }
;
