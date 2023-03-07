import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../app/store";
import CircularProgress from "@mui/material/CircularProgress";

type ProfilePagePropsType = {
    profile: ProfileResponseType | null
    isFetching: boolean
    status: string
    updateStatus: (newStatus: string) => void
}

export const Profile: React.FC<ProfilePagePropsType> = ({profile, isFetching, status, updateStatus}: ProfilePagePropsType) => {
        return (
            <>
                {isFetching
                    ? <CircularProgress />
                    : <div className={styles.content}>
                        <ProfileInfo profile={profile}
                                     status={status}
                                     updateStatus={updateStatus}/>
                        <MyPostsContainer/>
                    </div>}
            </>
        );
    }
;
