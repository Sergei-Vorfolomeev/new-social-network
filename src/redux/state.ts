import {v1} from "uuid";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    // addPost: (textPost: string) => void
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: GeneralACType) => void
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    navBar: NavBarType
}
export type ProfilePageType = {
    posts: PostsType[]
}
export type MessagePageType = {
    friendsInMessages: FriendsInMessagesType[]
    messages: MessagesType[]
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

export type GeneralACType = addPostACType
type addPostACType = ReturnType<typeof addPostAC>

export const store: StoreType = {
    _state: {
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
                {id: v1(), name: 'Tolya', avatar: "https://pngimg.com/uploads/alien/alien_PNG53.png",},
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
        },
    },
    _callSubscriber(state: StateType) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    // addPost(textPost: string){
    //     const newPost = {id: v1(), text: textPost, likesCount: 0}
    //     this._state.profilePage.posts.unshift(newPost)
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        switch (action.type) {
            case "ADD-POST": {
                const newPost = {id: v1(), text: action.textPost, likesCount: 0}
                    this._state.profilePage.posts.unshift(newPost)
                    this._callSubscriber(this._state)
            }
        }
    }

}

export const addPostAC = (text:string) => {
    return {
        type: 'ADD-POST',
        textPost: text,
    } as const
}