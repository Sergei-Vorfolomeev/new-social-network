import {combineReducers, legacy_createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {navBarReducer} from "./navBarReducer";
import {UsersPageReducer} from "./UsersPageReducer";

export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    navBar: navBarReducer,
    usersPage: UsersPageReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action: GeneralACType) => void
// }
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    navBar: NavBarType
}
export type ProfilePageType = {
    posts: PostsType[]
    profile: null | ProfileResponseType
}
export type MessagePageType = {
    friendsInMessages: FriendsInMessagesType[]
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
export type NavBarType = {
    friendsInNavBar: FriendsInNavBar[]
}

export type PostsType = {
    id: string
    text: string
    likesCount: number
}
export type FriendsInMessagesType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
}
export type FriendsInNavBar = {
    id: string
    name: string
    avatar: string
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

//@ts-ignore
window.store = store