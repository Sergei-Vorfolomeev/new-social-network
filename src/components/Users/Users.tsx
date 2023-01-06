import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    return (
        <>
            {props.users.map(el => {
                return (
                    <div className={styles.rootContainer}>
                        <div className={styles.avatarAndButtonContainer}>
                            <img src={el.avatar} alt="" className={styles.avatar}/>
                            <div>
                                {el.followStatus
                                ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(el.id)}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.infoUserContainer}>
                            <div>
                                <h4>{el.name}</h4>
                                {el.textStatus}
                            </div>
                            <div>
                                <div>{el.location.country}</div>
                                {el.location.city}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};
