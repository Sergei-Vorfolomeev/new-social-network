import React from 'react';
import styles from './Users.module.css'
import {ItemsResponseType} from "../../store/UsersPageReducer";
import {NavLink} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import {followAPI} from "../../api/api";
import CircularProgress from "@mui/material/CircularProgress";

type PropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setCurrentPageHandler: (pageNumber: number) => void
    isFetching: boolean
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingProgress: number[]
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
            {props.isFetching && <CircularProgress />}
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
                                    ? <button disabled={props.followingProgress.some(id => id === el.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, el.id)
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
                                            .finally(() => {
                                                props.toggleFollowingProgress(false, el.id)
                                            })
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id => id === el.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, el.id)
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
                                            .finally(() => {
                                            props.toggleFollowingProgress(false, el.id)
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
