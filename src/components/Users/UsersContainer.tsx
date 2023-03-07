import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {
    follow, followTC,
    getUsersTC,
    ItemsResponseType,
    setCurrentPage,
    setTotalCount,
    setUsersTC,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow, unfollowTC,
    UsersResponseType,
} from "../../store/UsersPageReducer";
import {Users} from "./Users";

// TYPES
type MapStateToPropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    followingProgress: number[]
}
type MapDispatchToPropsType = {
    // follow: (userID: number) => void,
    // unfollow: (userID: number) => void,
    setUsers: (pageNumber: number, pageSize: number) => void,
    // setTotalCount: (totalCount: number) => void
    // setCurrentPage: (pageNumber: number) => void
    // toggleIsFetching: (value: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}
const mapDispatchToProps = {
    // follow,
    // unfollow,
    // setTotalCount,
    // setCurrentPage,
    // toggleIsFetching,
    toggleFollowingProgress,
    getUsers: getUsersTC,
    setUsers: setUsersTC,
    follow: followTC,
    unfollow: unfollowTC
}


class UsersAPIContainerClass extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setSelectedPageHandler(pageNumber: number) {
        this.props.setUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setSelectedPageHandler={this.setSelectedPageHandler.bind(this)}
            isFetching={this.props.isFetching}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingProgress={this.props.followingProgress}
        />
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainerClass)
