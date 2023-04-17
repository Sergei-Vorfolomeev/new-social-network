import React from 'react';
import s from "features/Users/User/User.module.scss";
import {ItemsResponseType} from "features/Users/UsersPageReducer";
import defaultAva from 'common/assets/img/defaultAva.png'
import {Button} from "common/components/Button/Button";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: ItemsResponseType
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingProgress: number[]
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

const buttonStyle = {
    background: '#0D6EFDFF',
    color: '#fff'
}

export const User = ({user, follow, unfollow, followingProgress}: PropsType) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.avatarContainer}>
                <NavLink to={'/userProfile/' + user.id}>
                    {user.photos.small
                        ? <img src={user.photos.small} alt="avatar" className={s.avatar}/>
                        : <img src={defaultAva} alt="defaultAvatar"
                               className={s.avatar}/>}
                </NavLink>
            </div>
            <div className={s.userInfoBlock}>
                <div className={s.userInfo}>
                    <NavLink to={'/profile/' + user.id}>
                        <h2 className={s.userName}>{user.name}</h2>
                    </NavLink>
                    <p className={s.userStatus}>{user.status}</p>
                </div>
                <div className={s.buttonBox}>
                    {user.followed
                        ? <Button
                            name={'Following'}
                            callback={() => unfollow(user.id)}
                            disabled={followingProgress.some(id => id === user.id)}
                            style={buttonStyle}/>
                        : <Button name={'+ Follow'}
                                  callback={() => follow(user.id)}
                                  disabled={followingProgress.some(id => id === user.id)}/>
                    }
                </div>
            </div>
        </div>
    );
};
