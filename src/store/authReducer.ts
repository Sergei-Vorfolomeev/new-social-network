import {Dispatch} from "redux";
import {authAPI, LoginType} from "../api/api";

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
        case "LOGIN":
            return {
                ...state,
                isAuth: action.payload.value
            }
        default:
            return state
    }
}

// TYPES
type ActionsType = SetUserDataACType | LogInACType
type SetUserDataACType = ReturnType<typeof setUserData>
type LogInACType = ReturnType<typeof logInAC>

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
export const logInAC = (value: boolean) => {
    return {
        type: 'LOGIN',
        payload: {
            value
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
export const logInTC = (data: LoginType) => (dispatch: Dispatch) => {
    authAPI.loginIn(data)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(logInAC(true))
            } else {
                alert(res.messages[0])
            }
        })
}




