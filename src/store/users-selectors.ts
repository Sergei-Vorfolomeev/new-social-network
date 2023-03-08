import {AppRootStateType} from "../app/store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.items
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(e => true)
})
export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getTotalCount = (state: AppRootStateType) => {
    return state.usersPage.totalCount
}
export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state: AppRootStateType) => {
    return state.usersPage.followingProgress
}




