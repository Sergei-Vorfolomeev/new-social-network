import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UsersResponseType = {
    items: ItemsResponseType[]
    totalCount: number
    error: string | null
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
export type ItemsResponseType = {
    name: string
    id: number
    photos: {
        small: undefined | string
        large: undefined | string
    },
    status: null | string
    followed: boolean
}

const initialState = {
    items: [
        // {
        //     "name": "Shubert",
        //     "id": 1,
        //     "photos": {
        //         "small": undefined,
        //         "large": undefined
        //     },
        //     "status": null,
        //     "followed": false
        // },
        // {
        //     "name": "Hacker",
        //     "id": 2,
        //     "photos": {
        //         "small": undefined,
        //         "large": undefined
        //     },
        //     "status": null,
        //     "followed": false
        // }
    ],
    totalCount: 0,
    error: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

export const UsersPageReducer = (state: UsersResponseType = initialState, action: GeneralACType): UsersResponseType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        case 'SET-USERS':
            return {
                ...state,
                items: [
                    // ...state.items,
                    ...action.payload.items
                ]
            }
        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.payload.pageNumber
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.payload.value
            }
        case "TOGGLE-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingProgress:
                    action.payload.isFetching
                        ? [...state.followingProgress, action.payload.id]
                        : state.followingProgress.filter(el => el !== action.payload.id)
            }
        default:
            return state
    }
}

type GeneralACType =
    FollowACType |
    UnfollowACType |
    SetUsersACType |
    SetTotalCountACType |
    SetCurrentPageACType |
    ToggleIsFetchingACType |
    ToggleFollowingProgressACType
type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetTotalCountACType = ReturnType<typeof setTotalCount>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>


// ACTION CREATORS
export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}
export const setUsers = (items: ItemsResponseType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            items
        }
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}
export const toggleIsFetching = (value: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            value
        }
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, id: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        payload: {
            isFetching, id
        }
    } as const
}

// THUNK CREATORS
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
}
export const setUsersTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))

    usersAPI.setSelectedPage(pageNumber, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
        })
}
export const followTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))

    usersAPI.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            } else {
                alert(data.messages[0])
            }
        })
        .catch((e) => {
            alert(e.message)
        })
        .finally(() => {
            dispatch(toggleFollowingProgress(false, id))
        })
}
export const unfollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.unfollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            } else {
                alert(data.messages[0])
            }
        })
        .catch((e) => {
            alert(e.message)
        })
        .finally(() => {
            dispatch(toggleFollowingProgress(false, id))
        })
}
