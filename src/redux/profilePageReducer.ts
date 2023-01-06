import {ProfilePageType} from "./store-redux";
import {v1} from "uuid";

const initialState = {
    posts: [
        {id: v1(), text: 'Life is here?', likesCount: 0,},
        {id: v1(), text: 'It\'s my first post!', likesCount: 8,},
        {id: v1(), text: 'Hello!', likesCount: 15,},
    ],
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
        default:
            return state
    }
}

export type GeneralACType = addPostACType
type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (text: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            textPost: text
        }
    } as const
}