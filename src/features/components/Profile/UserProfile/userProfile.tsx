import React, {useEffect} from 'react';
import s from 'features/components/Profile/MyProfile/Profile.module.scss'
import {ProfileInfo} from "features/components/Profile/MyPosts/ProfileInfo";
import {MyPostsContainer} from "features/components/Profile/MyPosts/MyPostsContainer";
import {AppRootStateType, ProfileResponseType, useAppDispatch} from "app/store";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";
import {getProfile, updateStatus} from "store/profilePageReducer";
import {useParams} from "react-router-dom";
import {ItemsResponseType} from "store/UsersPageReducer";


export const UserProfile = () => {
    const loading = useSelector<AppRootStateType, boolean>(state => state.usersPage.isFetching)
    const profile = useSelector<AppRootStateType, ProfileResponseType | null>(state => state.profilePage.profile)
    const status = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const usersArray = useSelector<AppRootStateType, ItemsResponseType[]>(state => state.usersPage.items)
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
                            {/*<MyPostsContainer/>*/}
                        </div>}
                </div>
        );
    }
;

