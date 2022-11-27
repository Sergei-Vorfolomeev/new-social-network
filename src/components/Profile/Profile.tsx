import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    addPost: (textPost:string) => void
}

export const Profile:React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
            addPost={(textPost:string) => props.addPost(textPost)}/>
        </div>
    );
};
