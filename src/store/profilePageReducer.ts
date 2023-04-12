import {PostType, ProfileResponseType} from "app/store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";
import {toggleIsFetching} from "./UsersPageReducer";
import {AxiosError} from "axios";

export type ProfilePageType = {
    posts: PostType[]
    profile: null | ProfileResponseType
    status: string
}

const initialState: ProfilePageType = {
    posts: [
        // {id: v1(), text: 'Life is here?', likesCount: 0,},
        // {id: v1(), text: 'It\'s my first post!', likesCount: 8,},
        // {id: v1(), text: 'Hello!', likesCount: 15,},
    ],
    profile: null,
    status: ''
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: GeneralACType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {id: v1(), text: action.payload.textPost, likesCount: 0}
           // state.posts.unshift(newPost)
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case "SET-PROFILE-USER":
            return {
                ...state,
                profile: action.payload.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export type GeneralACType = addPostACType | setProfileUserACType | SetStatusACType
type addPostACType = ReturnType<typeof addPostAC>
type setProfileUserACType = ReturnType<typeof setProfileUser>
type SetStatusACType = ReturnType<typeof setStatus>


// ACTION CREATORS
export const addPostAC = (text: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            textPost: text
        }
    } as const
}
export const setProfileUser = (profile: ProfileResponseType) => {
    return {
        type: 'SET-PROFILE-USER',
        payload: {
            profile
        }
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status
        }
    } as const
}

// THUNK CREATORS
export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfileUser(data))
            dispatch(toggleIsFetching(false))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
                dispatch(setStatus(data))
        })
        .catch((e: AxiosError) => {
           alert(e.message)
        })
}
export const updateStatus = (newStatus: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus)
        .then(data => {
            dispatch(setStatus(newStatus))
            console.log(data)
        })
        .catch((e: AxiosError) => {
            alert(e.message)
        })
}