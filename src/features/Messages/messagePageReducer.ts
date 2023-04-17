import {v1} from "uuid";
import {MessagePageType} from "app/store";

const initialState = {
    messages: [
        {id: v1(), message: 'Hello everyone!',},
        {id: v1(), message: 'Current API does not support sending messages',},
        {id: v1(), message: 'After reloading page the sent messages will be deleted',},
    ],
}

export const messagePageReducer = (state: MessagePageType = initialState, action: GeneralACType): MessagePageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            if (action.payload.textMessage) {
                const newMessage = {id: v1(), message: action.payload.textMessage}
                return {...state, messages: [...state.messages, newMessage]}
            } else return state
        }
        default: return state
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