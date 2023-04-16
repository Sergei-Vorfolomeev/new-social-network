import React from 'react';
import s from 'features/components/Profile/MyPosts/ProfileInfo.module.scss'
import {AppRootStateType, ProfileResponseType} from "app/store";
import {ProfileStatus} from "common/components/ProfileStatus/ProfileStatus";
import defaultAvatar from 'common/assets/img/defaultAva.png'
import {Button} from "common/components/Button/Button";
import {useSelector} from "react-redux";
import {followTC, unfollowTC} from "store/UsersPageReducer";

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (newStatus: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const userLogin = useSelector<AppRootStateType, string | null>(state => state.auth.login)

    // debugger
    // if (!props.profile) {
    //     <Preloader/>
    // } else {

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.mainInfoContainer}>
                <div className={s.mainInfo}>
                    <div className={s.avaBox}>
                        {props.profile?.photos.large
                            ? <img src={props.profile?.photos.large} alt="avatar" className={s.avatar}/>
                            : <img src={defaultAvatar} alt="defaultAvatar" className={s.avatar}/>}
                    </div>
                    <div className={s.nameAndStatus}>
                        <h1 className={s.fullName}>{props.profile?.fullName}</h1>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>

            <div className={s.otherInfo}>
                <div className={s.aboutMeBlock}>
                    <h2 className={s.aboutMeBlock_title}>About me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum facere minima quos
                        repellendus. Blanditiis expedita nesciunt nisi sapiente tempora.</p>
                </div>

                <div className={s.contactsInfoBlock}>
                    <h2 className={s.aboutMeBlock_title}>Contacts</h2>

                    {props.profile?.contacts.facebook || props.profile?.contacts.github || props.profile?.contacts.instagram
                        ? <div>
                            <a href={props.profile?.contacts.facebook ? props.profile?.contacts.facebook : '#'}
                               className={s.link}>
                                {props.profile?.contacts.facebook}
                            </a> <br/>
                            <a href={props.profile?.contacts.github ? props.profile?.contacts.github : '#'}
                               className={s.link}>
                                {props.profile?.contacts.github}
                            </a> <br/>
                            <a href={props.profile?.contacts.instagram ? props.profile?.contacts.instagram : '#'}
                               className={s.link}>
                                {props.profile?.contacts.instagram}
                            </a> <br/>
                        </div>
                        : <span>No provided contacts</span>}
                </div>
            </div>
        </div>
    );

};
