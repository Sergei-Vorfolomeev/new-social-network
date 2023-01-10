import React from 'react';
import styles from './Users.module.css'
import {ItemsResponseType, UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";


type PropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setCurrentPageHandler: (pageNumber: number) => void
}

export const Users = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {pages.map(el => {
                return (
                    <span key={el}
                        className={props.currentPage === el ? styles.selectedPage : ''}
                          onClick={() => props.setCurrentPageHandler(el)}>{el + ' '}</span>
                )
            })}

            {props.users.map((el: ItemsResponseType) => {
                return (
                    <div className={styles.rootContainer} key={el.id}>
                        <div className={styles.avatarAndButtonContainer}>
                            {el.photos.small
                                ? <img src={el.photos.small} alt="avatar" className={styles.avatar}/>
                                : <img src="https://pngimg.com/uploads/alien/alien_PNG28.png" alt="default-avatar"
                                       className={styles.avatar}/>}
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
