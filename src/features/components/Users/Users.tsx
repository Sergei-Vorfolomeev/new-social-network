import React from 'react';
import {ItemsResponseType} from "store/UsersPageReducer";
import Pagination from '@mui/material/Pagination';
import CircularProgress from "@mui/material/CircularProgress";
import {User} from "features/components/Users/User/User";
import s from './Users.module.scss'

type PropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setSelectedPageHandler: (pageNumber: number) => void
    isFetching: boolean
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingProgress: number[]
}

export const Users = (props: PropsType) => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        props.setSelectedPageHandler(value)
    };

    const pagesCount = Math.ceil(props.totalCount / props.pageSize)

    if (props.isFetching) return <div className={s.loading}><CircularProgress/></div>

    return (
        <>
            {props.users.map((el: ItemsResponseType) => {
                return (
                    <User key={el.id}
                          user={el}
                          follow={props.follow}
                          unfollow={props.unfollow}
                          followingProgress={props.followingProgress}
                          toggleFollowingProgress={props.toggleFollowingProgress}
                    />
                )
            })}
            <div className={s.pagination}>
                <Pagination count={pagesCount} page={page} onChange={handleChange}/>
            </div>
        </>
);
};
