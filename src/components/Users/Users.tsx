import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";



export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsers(response.data))
        }
    }

    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(el => {
                return (
                    <div className={styles.rootContainer}>
                        <div className={styles.avatarAndButtonContainer}>
                            <img src={el.photos.small} alt="" className={styles.avatar}/>
                            <div>
                                {el.followed
                                ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(el.id)}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.infoUserContainer}>
                            <div>
                                <h4>{el.name}</h4>
                                {el.status}
                            </div>
                            {/*<div>*/}
                            {/*    <div>{el.location.country}</div>*/}
                            {/*    {el.location.city}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                )
            })}
        </>
    );
};
