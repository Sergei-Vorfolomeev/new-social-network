import React from 'react';
import styles from "../Users.module.css";

type UserPropsType = {
    key: number
    id: number
    name: string
    avatar: string | undefined
    status: string | null
    followed: boolean
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const User = (props: UserPropsType) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.avatarAndButtonContainer}>
                <img src={props.avatar} alt="" className={styles.avatar}/>
                <div>
                    {props.followed
                        ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(props.id)}>Follow</button>}
                </div>
            </div>
            <div className={styles.infoUserContainer}>
                <div>
                    <h4>{props.name}</h4>
                    {props.status}
                </div>
                {/*<div>*/}
                {/*    <div>{el.location.country}</div>*/}
                {/*    {el.location.city}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
