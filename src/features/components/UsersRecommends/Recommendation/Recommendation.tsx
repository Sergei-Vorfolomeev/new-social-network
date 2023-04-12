import React from 'react';
import s from './Recommendation.module.scss'
import {ItemsResponseType} from "store/UsersPageReducer";
import defaultAvatar from 'common/assets/img/defaultAva.png'

type PropsType = {
    user: ItemsResponseType
}

const Recommendation = ({user}: PropsType) => {
    return (
        <div className={s.recommendationBlock}>
            <div className={s.avatar}>
                {user.photos.small
                ? <img src={user.photos.small} alt="avatar"/>
                : <img src={defaultAvatar} alt="defaultAvatar"/>}
            </div>
            <div className={s.userInfoBlock}>
                <div className={s.userInfo}>
                    <h3>{user.name}</h3>
                </div>
                <div className={s.buttonBox}>
                    {user.followed
                        ? <button className={s.button}>Unfollow</button>
                        : <button className={s.button}>+ Follow</button>}
                </div>
            </div>
        </div>
    );
};

export default Recommendation;