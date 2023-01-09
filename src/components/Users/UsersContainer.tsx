import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../store/UsersPageReducer";
import {UsersClass} from "./UsersClass";

export type mapStateToPropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
}
export type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (items: ItemsResponseType[]) => void,
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export type ResponseType = {
    items: ItemsResponseType[]
    totalCount: number
    error: string | null
    pageSize: number
    currentPage: number
}
export type ItemsResponseType = {
    name: string
    id: number
    photos: {
        small: undefined | string
        large: undefined | string
    },
    status: null | string
    "followed": boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (items) => dispatch(setUsersAC(items)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
