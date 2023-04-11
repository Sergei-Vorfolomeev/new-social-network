import React from 'react';
import s from 'features/components/Profile/Profile.module.scss'
import {ProfileInfo} from "features/components/Profile/MyPosts/ProfileInfo";
import {MyPostsContainer} from "features/components/Profile/MyPosts/MyPostsContainer";
import {ProfileResponseType} from "app/store";
import CircularProgress from "@mui/material/CircularProgress";

type ProfilePagePropsType = {
    profile: ProfileResponseType | null
    isFetching: boolean
    status: string
    updateStatus: (newStatus: string) => void
}

export const Profile: React.FC<ProfilePagePropsType> = ({
                                                            profile,
                                                            isFetching,
                                                            status,
                                                            updateStatus
                                                        }: ProfilePagePropsType) => {
        return (
            <>
                <div className={s.mainContainer}>
                    {isFetching
                        ? <CircularProgress/>
                        : <div className={s.content}>
                            <ProfileInfo profile={profile}
                                         status={status}
                                         updateStatus={updateStatus}/>
                            <MyPostsContainer/>
                        </div>}
                </div>

            </>
        );
    }
;
