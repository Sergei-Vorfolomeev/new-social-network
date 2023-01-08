import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType, UserType} from "../../store/store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../store/UsersPageReducer";
import {UsersClass} from "./UsersClass";

export type mapStateToPropsType = {
    users: ItemsResponseType[]
}
export type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (items: ResponseType) => void,
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export type ResponseType = {
    items: ItemsResponseType[]
    totalCount: number
    error: string | null
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
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (data) => dispatch(setUsersAC(data)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
