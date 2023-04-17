import React from 'react';
import s from 'features/Profile/MyProfile/Profile.module.scss'
import {ProfileInfo} from "features/Profile/MyProfile/ProfileInfo";
import {MyPostsContainer} from "features/Profile/MyPosts/MyPostsContainer";
import {AppRootStateType, ProfileResponseType} from "app/store";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";

type ProfilePagePropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (newStatus: string) => void
}

export const Profile: React.FC<ProfilePagePropsType> = ({
                                                            profile,
                                                            status,
                                                            updateStatus
                                                        }: ProfilePagePropsType) => {
        const loading = useSelector<AppRootStateType, boolean>(state => state.app.loading)

        if (loading) return <div className={s.loading}><CircularProgress/></div>
        return (
            <div className={s.mainContainer}>
                <div className={s.content}>
                    <ProfileInfo profile={profile}
                                 status={status}
                                 updateStatus={updateStatus}/>
                    <MyPostsContainer/>
                </div>
            </div>
        );
    }
;
