
import {v1} from "uuid";
import {MessagePageType} from "./store";

const initialState = {
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
}



export const messagePageReducer = (state: MessagePageType = initialState, action: GeneralACType): MessagePageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage = {id: v1(), message: action.payload.textMessage}
            return {...state, messages: [...state.messages, newMessage]}
            // state.messages.push(newMessage)
        }
        default:
            return state
    }
}

export type GeneralACType = sendMessageACType
type sendMessageACType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (text: string) => {
    return {
        type: "SEND-MESSAGE",
        payload: {
            textMessage: text
        }
    } as const
}