import React from 'react';
import s from './Recommendation.module.scss'
import {followTC, unfollowTC, ItemsResponseType} from "store/UsersPageReducer";
import defaultAvatar from 'common/assets/img/defaultAva.png'
import {Button} from "common/components/Button/Button";
import {AppRootStateType, useAppDispatch} from "app/store";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: ItemsResponseType
}
const buttonStyle = {
    background: '#0D6EFDFF',
    color: '#fff'
}

const Recommendation = ({user}: PropsType) => {

    const followingProgress = useSelector<AppRootStateType, number[]>(state => state.usersPage.followingProgress)
    const dispatch = useAppDispatch()

    return (
        <div className={s.recommendationBlock}>
            <div className={s.avatar}>
                <NavLink to={'/profile/' + user.id}>
                {user.photos.small
                ? <img src={user.photos.small} alt="avatar"/>
                : <img src={defaultAvatar} alt="defaultAvatar"/>}
                </NavLink>
            </div>
            <div className={s.userInfoBlock}>
                <div className={s.userInfo}>
                    <NavLink to={'/profile/' + user.id}>
                    <h3>{user.name}</h3>
                    </NavLink>
                </div>
                <div className={s.buttonBox}>
                    {user.followed
                        ? <Button
                            name={'Following'}
                            callback={() => dispatch(unfollowTC(user.id))}
                            disabled={followingProgress.some(id => id === user.id)}
                            style={buttonStyle}/>
                        : <Button
                            name={'+ Follow'}
                            callback={() => dispatch(followTC(user.id))}
                            disabled={followingProgress.some(id => id === user.id)}/>}
                </div>
            </div>
        </div>
    );
};

export default Recommendation;