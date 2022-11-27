import {v1} from "uuid";

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    navBar: NavBarType
}

let rerenderEntireTree = (state:StateType) => {}

export type ProfilePageType = {
    posts: PostsType[]
}
export type MessagePageType = {
    friendsInMessages: FriengsInMessagesType[]
    messages: MessagesType[]
}
export type NavBarType = {
    friendsInNavBar: friendsInNavBar[]
}

export type PostsType = {
    id: string
    text: string
    likesCount: number
}
export type FriengsInMessagesType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
}
export type friendsInNavBar = {
    id: string
    name: string
    avatar: string
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), text: 'Life is here?', likesCount: 0,},
            {id: v1(), text: 'It\'s my first post!', likesCount: 8,},
            {id: v1(), text: 'Hello!', likesCount: 15,},
        ],
    },
    messagePage: {
        friendsInMessages: [
            {id: v1(), name: 'Vadim', avatar: "https://pngimg.com/uploads/alien/alien_PNG26.png",},
            {id: v1(), name: 'Tolya', avatar: "https://pngimg.com/uploads/alien/alien_PNG5.png",},
            {id: v1(), name: 'Elina', avatar: "https://pngimg.com/uploads/alien/alien_PNG24.png",},
            {id: v1(), name: 'Lenya', avatar: "https://pngimg.com/uploads/alien/alien_PNG34.png",},
            {id: v1(), name: 'Fedya', avatar: "https://pngimg.com/uploads/alien/alien_PNG1.png",},
        ],
        messages: [
            {id: v1(), message: 'Hello',},
            {id: v1(), message: 'How are you?',},
            {id: v1(), message: 'The asteroid is flying to our planet!',},
        ],
    },
    navBar: {
        friendsInNavBar: [
            {id: v1(), name: 'Nikita', avatar: "https://pngimg.com/uploads/alien/alien_PNG5.png"},
            {id: v1(), name: 'Alina', avatar: "https://pngimg.com/uploads/alien/alien_PNG6.png"},
            {id: v1(), name: 'Timosha', avatar: "https://pngimg.com/uploads/alien/alien_PNG9.png"},
        ]
    }
}

export const addPost = (textPost: string) => {
    const newPost = {id: v1(), text: textPost, likesCount: 0}
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state)
}

export const subscribe = (observer:(state: StateType) => void) => {
    rerenderEntireTree = observer
}