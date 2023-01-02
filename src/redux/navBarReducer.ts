import {NavBarType} from "./store-redux";
import {v1} from "uuid";

const initialState = {
    friendsInNavBar: [
        {id: v1(), name: 'Nikita', avatar: "https://pngimg.com/uploads/alien/alien_PNG5.png"},
        {id: v1(), name: 'Alina', avatar: "https://pngimg.com/uploads/alien/alien_PNG6.png"},
        {id: v1(), name: 'Timosha', avatar: "https://pngimg.com/uploads/alien/alien_PNG9.png"},
    ]
}

export const navBarReducer = (state: NavBarType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

