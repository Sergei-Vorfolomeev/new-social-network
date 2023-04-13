import React from 'react';
import s from "./User.module.scss";
import {ItemsResponseType} from "store/UsersPageReducer";
import defaultAva from 'common/assets/img/defaultAva.png'
import {Button} from "common/components/Button/Button";

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
                {user.photos.small
                    ? <img src={user.photos.small} alt="avatar" className={s.avatar}/>
                    : <img src={defaultAva} alt="defaultAvatar"
                           className={s.avatar}/>}
            </div>
            <div className={s.userInfoBlock}>
                <div className={s.userInfo}>
                    <h2 className={s.userName}>{user.name}</h2>
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



        // <div className={styles.rootContainer}>
        //     <div className={styles.avatarAndButtonContainer}>
        //         <img src={props.avatar} alt="" className={styles.avatar}/>
        //         <div>
        //             {props.followed
        //                 ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
        //                 : <button onClick={() => props.follow(props.id)}>Follow</button>}
        //         </div>
        //     </div>
        //     <div className={styles.infoUserContainer}>
        //         <div>
        //             <h4>{props.name}</h4>
        //             {props.status}
        //         </div>
        //         {/*<div>*/}
        //         {/*    <div>{el.location.country}</div>*/}
        //         {/*    {el.location.city}*/}
        //         {/*</div>*/}
        //     </div>
        // </div>
    );
};
