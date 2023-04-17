import React, {useEffect} from 'react';
import s from 'features/Profile/MyProfile/Profile.module.scss'
import {ProfileInfo} from "features/Profile/MyProfile/ProfileInfo";
import {AppRootStateType, ProfileResponseType, useAppDispatch} from "app/store";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";
import {getProfile, updateStatus} from "features/Profile/profilePageReducer";
import {useParams} from "react-router-dom";


export const UserProfile = () => {
    const loading = useSelector<AppRootStateType, boolean>(state => state.usersPage.isFetching)
    const profile = useSelector<AppRootStateType, ProfileResponseType | null>(state => state.profilePage.profile)
    const status = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const dispatch = useAppDispatch()

    let {userId} = useParams()

    useEffect(() => {
        userId && dispatch(getProfile(userId))
    }, [userId])

        return (
                <div className={s.mainContainer}>
                    {loading
                        ? <CircularProgress/>
                        : <div className={s.content}>
                            <ProfileInfo profile={profile}
                                         status={status}
                                         updateStatus={updateStatus}/>
                        </div>}
                </div>
        );
    }
;

