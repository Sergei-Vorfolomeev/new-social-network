import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Dispatch} from "redux";
import {
    follow,
    ItemsResponseType,
    setCurrentPage,
    setTotalCount,
    setUsers,
    unfollow,
    ResponseType, toggleIsFetching,
} from "../../store/UsersPageReducer";
import {Users} from "./Users";
import axios from "axios";

export type mapStateToPropsType = {
    users: ItemsResponseType[]
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (items: ItemsResponseType[]) => void,
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (value: boolean) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
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


export class UsersAPIContainerClass extends React.Component<UsersPropsType, ResponseType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    setCurrentPageHandler(pageNumber: number) {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
