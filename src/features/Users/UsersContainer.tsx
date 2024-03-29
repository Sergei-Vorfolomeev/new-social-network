import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "app/store";
import {
    followTC,
    getUsersTC,
    ItemsResponseType,
    setUsersTC,
    toggleFollowingProgress,
    unfollowTC,
    UsersResponseType,
} from "features/Users/UsersPageReducer";
import {Users} from "features/Users/Users";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "features/Users/users-selectors";

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
    setUsers: (pageNumber: number, pageSize: number) => void,
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}
const mapDispatchToProps = {
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
