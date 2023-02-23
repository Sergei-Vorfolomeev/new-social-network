import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../store/store";
import {Preloader} from "../common/Preloader/Preloader";

type ProfilePagePropsType = {
    profile: ProfileResponseType | null
    isFetching: boolean
}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {

        return (
            <>
                {props.isFetching
                    ? <Preloader/>
                    : <div className={styles.content}>
                        <ProfileInfo profile={props.profile}/>
                        <MyPostsContainer/>
                    </div>}
            </>
        );
    }
;
