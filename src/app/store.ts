import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profilePageReducer, ProfilePageType} from "store/profilePageReducer";
import {messagePageReducer} from "features/components/Messages/messagePageReducer";
import {UsersPageReducer} from "store/UsersPageReducer";
import {authReducer} from "store/authReducer";
import thunkMiddleWare, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    usersPage: UsersPageReducer,
    auth: authReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export type MessagePageType = {
    messages: MessagesType[]
}
export type UsersPageType = {
    users: UserType[]
}
export type UserType = {
    id: string,
    name: string
    age: number
    avatar: string
    followStatus: boolean
    textStatus: string
    location: LocationType
}
type LocationType = {
    country: string
    city: string
}
export type PostType = {
    id: string
    text: string
    likesCount: number
}
export type MessagesType = {
    id: string
    message: string
}
export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}
export type ProfileResponseType = {
    aboutMe: string,
    contacts: ContactType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
type ContactType = {
    facebook: string | null,
    website: null | string,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
type PhotosType = {
    small: string | undefined
    large: string | undefined
}
export type ErrorType = {
    message: string
}
// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action: GeneralACType) => void
// }

//@ts-ignore
window.store = store