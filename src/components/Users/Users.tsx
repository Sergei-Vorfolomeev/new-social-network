import React from 'react';
import styles from './Users.module.css'
import {ItemsResponseType} from "../../store/UsersPageReducer";
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {ResponseType} from "../../store/store";
import Pagination from '@mui/material/Pagination';
import {followAPI} from "../../api/api";

type PropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setCurrentPageHandler: (pageNumber: number) => void
    isFetching: boolean
}

export const Users = (props: PropsType) => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        props.setCurrentPageHandler(value)
    };


    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    // const pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return (
        <>
            {props.isFetching && <Preloader/>}
            <Pagination count={pagesCount} page={page} onChange={handleChange}/>
            {/*{pages.map(el => {*/}
            {/*    return (*/}
            {/*        <span key={el}*/}
            {/*              className={props.currentPage === el ? styles.selectedPage : ''}*/}
            {/*              onClick={() => props.setCurrentPageHandler(el)}>{el + ' '}</span>*/}
            {/*    )*/}
            {/*})}*/}

            {props.users.map((el: ItemsResponseType) => {
                return (
                    <div className={styles.rootContainer} key={el.id}>
                        <div className={styles.avatarAndButtonContainer}>
                            <NavLink to={'/profile/' + el.id}>
                                {el.photos.small
                                    ? <img src={el.photos.small} alt="avatar" className={styles.avatar}/>
                                    : <img src="https://pngimg.com/uploads/alien/alien_PNG28.png" alt="default-avatar"
                                           className={styles.avatar}/>}
                            </NavLink>
                            <div>
                                {el.followed
                                    ? <button onClick={() => {
                                        followAPI.unfollow(el.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(el.id)
                                                } else {
                                                    alert(data.messages[0])
                                                }
                                            })
                                            .catch((e) => {
                                                alert(e.message)
                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        followAPI.follow(el.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(el.id)
                                                } else {
                                                    alert(data.messages[0])
                                                }
                                            })
                                            .catch((e) => {
                                                alert(e.message)
                                            })
                                    }}>Follow</button>}
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
