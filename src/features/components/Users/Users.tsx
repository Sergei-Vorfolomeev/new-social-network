import React from 'react';
import styles from 'features/components/Users/Users.module.css'
import {ItemsResponseType} from "store/UsersPageReducer";
import {NavLink} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import CircularProgress from "@mui/material/CircularProgress";
import {Button} from "common/components/Button/Button";
import {User} from "features/components/Users/User/User";

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

    if (props.isFetching) return <CircularProgress/>

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
                    // <div className={styles.rootContainer} key={el.id}>
                    //     <div className={styles.avatarAndButtonContainer}>
                    //         <NavLink to={'/profile/' + el.id}>
                    //             {el.photos.small
                    //                 ? <img src={el.photos.small} alt="avatar" className={styles.avatar}/>
                    //                 : <img src="https://pngimg.com/uploads/alien/alien_PNG28.png" alt="default-avatar"
                    //                        className={styles.avatar}/>}
                    //         </NavLink>
                    //         <div>
                    //             {el.followed
                    //                 ? <Button
                    //                     name={'Unfollow'}
                    //                     callback={() => {
                    //                         props.unfollow(el.id)
                    //                     }}
                    //                     disabled={props.followingProgress.some(id => id === el.id)}
                    //                 />
                    //                 : <Button
                    //                     name={'+ Follow'}
                    //                     disabled={props.followingProgress.some(id => id === el.id)}
                    //                     callback={() => {
                    //                         props.follow(el.id)
                    //                     }}/>
                    //             }
                    //         </div>
                    //     </div>
                    //     <div className={styles.infoUserContainer}>
                    //         <div>
                    //             <h4>{el.name}</h4>
                    //             {el.status}
                    //         </div>
                    //         {/*<div>*/}
                    //         {/*    <div>{el.location.country}</div>*/}
                    //         {/*    {el.location.city}*/}
                    //         {/*</div>*/}
                    //     </div>
                    // </div>
                )
            })}
            <Pagination count={pagesCount} page={page} onChange={handleChange}/>
        </>
);
};
