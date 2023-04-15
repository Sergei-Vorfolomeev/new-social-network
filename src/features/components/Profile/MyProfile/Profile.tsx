import React from 'react';
import s from 'features/components/Profile/MyProfile/Profile.module.scss'
import {ProfileInfo} from "features/components/Profile/MyPosts/ProfileInfo";
import {MyPostsContainer} from "features/components/Profile/MyPosts/MyPostsContainer";
import {AppRootStateType, ProfileResponseType} from "app/store";
import CircularProgress from "@mui/material/CircularProgress";
import {Loader} from "features/components/common/Loader/Loader";
import {useSelector} from "react-redux";

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
        const loading = useSelector<AppRootStateType, boolean>(state => state.app.loading)

        if (loading) return <Loader/>
        return (
            <>
                <div className={s.mainContainer}>
                    <div className={s.content}>
                        <ProfileInfo profile={profile}
                                     status={status}
                                     updateStatus={updateStatus}/>
                        <MyPostsContainer/>
                    </div>
                </div>

            </>
        );
    }
;
