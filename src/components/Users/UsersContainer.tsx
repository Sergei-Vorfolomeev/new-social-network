import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {
    follow,
    ItemsResponseType,
    setCurrentPage,
    setTotalCount,
    setUsers,
    unfollow,
    UsersResponseType, toggleIsFetching,
} from "../../store/UsersPageReducer";
import {Users} from "./Users";
import axios from "axios";
import {usersAPI} from "../../api/api";

// TYPES
type MapStateToPropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (items: ItemsResponseType[]) => void,
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (value: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType  => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setTotalCount,
        setCurrentPage,
        toggleIsFetching,
    }


class UsersAPIContainerClass extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    setCurrentPageHandler(pageNumber: number) {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.setCurrentPage(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setCurrentPageHandler={this.setCurrentPageHandler.bind(this)}
            isFetching={this.props.isFetching}
        />
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainerClass)
