import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        default:
            return state
    }
}

// TYPES
type ActionsType = SetUserDataACType
type SetUserDataACType = ReturnType<typeof setUserData>

export type AuthMeResponseType = {
    data: DataAuthMeResponseType,
    resultCode: number,
    messages: string[],
    fieldsErrors: string[]
}
export type DataAuthMeResponseType = {
    id: number
    email: string,
    login: string,
}

// ACTION CREATORS
export const setUserData = (data: DataAuthMeResponseType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data
        }
    } as const
}

// THUNK CREATORS
export const meTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            } else {
                alert(data.messages[0])
            }
        })
}




