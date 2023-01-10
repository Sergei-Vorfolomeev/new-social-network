import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../store/UsersPageReducer";
import {Users} from "./Users";
import axios from "axios";

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


export class UsersAPIContainerClass extends React.Component<UsersPropsType, ResponseType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setCurrentPageHandler(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setCurrentPageHandler={this.setCurrentPageHandler.bind(this)}/>
    }
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainerClass)
