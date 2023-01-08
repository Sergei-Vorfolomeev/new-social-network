import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";
import {User} from "./User/User";


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data))
    }

    return (
        <>
            {props.users.map(el => {
                return (
                    <User key={el.id}
                          id={el.id}
                          name={el.name}
                          avatar={el.photos.small}
                          status={el.status}
                          followed={el.followed}
                          follow={props.follow}
                          unfollow={props.unfollow}

                    />
                )
            })}
        </>
    );
};
