import React from 'react';
import s from 'features/components/Profile/MyPosts/ProfileInfo.module.scss'
import {ProfileResponseType} from "app/store";
import {ProfileStatus} from "features/components/Profile/ProfileStatus";
import Button from "@mui/material/Button";

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (newStatus: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
   // debugger
    // if (!props.profile) {
    //     <Preloader/>
    // } else {
    return (
        <>
            <div className={s.profileInfoContainer}>
                <div className={s.profileInfo}>
                   <div className={s.mainInfoContainer}>
                       <div className={s.mainInfo}>
                           <div className={s.avaBox}>
                               <img src={props.profile?.photos.large} alt="" className={s.avatar}/>
                           </div>
                           <div className={s.nameAndStatus}>
                               <h1 className={s.fullName}>{props.profile?.fullName}</h1>
                               <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                           </div>
                       </div>
                       <Button variant="outlined" style={{borderRadius: '50rem', fontWeight: '500'}}>Folow</Button>                   </div>

                    <div className={s.otherInfo}>
                        <div className={s.aboutMeBlock}>
                            <h2 className={s.aboutMeBlock_title}>About me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum facere minima quos repellendus. Blanditiis expedita nesciunt nisi sapiente tempora.</p>
                        </div>

                        <div className={s.contactsInfoBlock}>
                            <h2 className={s.aboutMeBlock_title}>Contacts</h2>
                            <p>{props.profile?.contacts.facebook}</p>
                            <p>{props.profile?.contacts.github}</p>
                            <p>{props.profile?.contacts.instagram}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

};
