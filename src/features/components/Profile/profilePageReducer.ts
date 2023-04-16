import {PostType, ProfileResponseType} from "app/store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";
import {toggleIsFetching} from "store/UsersPageReducer";
import {appNetworkErrorUtil} from "common/utils/app-network-error-util";

export type ProfilePageType = {
    posts: PostType[]
    profile: null | ProfileResponseType
    status: string
}
type InitialStateType = ProfilePageType & { loading: boolean }

const initialState: InitialStateType = {
    posts: [
        {id: v1(), text: 'Try to type something!', likesCount: 0,},
        {id: v1(), text: 'It\'s my first post!', likesCount: 0,},
        {id: v1(), text: 'Hello!', likesCount: 0,},
    ],
    profile: null,
    status: '',
    loading: false,
}

export const profilePageReducer = (state: InitialStateType = initialState, action: GeneralACType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            if (action.payload.textPost) {
                const newPost = {id: v1(), text: action.payload.textPost, likesCount: 0}
                // state.posts.unshift(newPost)
                return {
                    ...state,
                    posts: [newPost, ...state.posts]
                }
            } else return state
        }
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.payload.postId)
            }
        }
        case "UPDATE_POST":
            return {
                ...state,
                posts: state.posts.map(el => el.id === action.payload.postId
                    ? {...el, text: action.payload.newText}
                    : el)
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
        case "SET_LOADING":
            return {...state, loading: action.payload.value}
        default:
            return state
    }
}

export type GeneralACType =
    | AddPostACType
    | SetProfileUserACType
    | SetStatusACType
    | DeletePostACType
    | UpdatePostACType
    | SetLoadingACType
type AddPostACType = ReturnType<typeof addPostAC>
type DeletePostACType = ReturnType<typeof deletePostAC>
type SetProfileUserACType = ReturnType<typeof setProfileUser>
type SetStatusACType = ReturnType<typeof setStatus>
type UpdatePostACType = ReturnType<typeof updatePostAC>
type SetLoadingACType = ReturnType<typeof setLoadingAC>


// ACTION CREATORS
export const addPostAC = (text: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            textPost: text
        }
    } as const
}
export const deletePostAC = (postId: string) => {
    return {
        type: 'DELETE-POST',
        payload: {
            postId
        }
    } as const
}
export const updatePostAC = (postId: string, newText: string) => {
    return {
        type: 'UPDATE_POST',
        payload: {
            postId, newText
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
const setLoadingAC = (value: boolean) => {
    return {
        type: 'SET_LOADING',
        payload: {value}
    } as const
}

// THUNK CREATORS
export const getProfile = (userId: string) => async (dispatch: Dispatch) => {
    dispatch(setLoadingAC(true))
    try {
        const res = await profileAPI.getProfile(userId)
        dispatch(setProfileUser(res))
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    } finally {
        dispatch(setLoadingAC(false))
    }
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res))
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    }
}
export const updateStatus = (newStatus: string) => async (dispatch: Dispatch) => {
    try {
        await profileAPI.updateStatus(newStatus)
        dispatch(setStatus(newStatus))
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    }
}