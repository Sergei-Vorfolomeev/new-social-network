import {Dispatch} from "redux";
import {authAPI, LoginType} from "api/api";
import {appServerErrorUtil} from "common/utils/app-server-error-util";
import {appNetworkErrorUtil} from "common/utils/app-network-error-util";

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
export const meTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.me()
        if (res.resultCode === 0) {
            dispatch(setUserData(res.data))
        } else {
            appServerErrorUtil(res, dispatch)
        }
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    }
}
export const loginTC = (data: LoginType) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.login(data)
        if (res.resultCode === 0) {
            dispatch(logInAC(true))
        } else {
            appServerErrorUtil(res, dispatch)
        }
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.logout()
        if (res.resultCode === 0) {
            dispatch(logInAC(false))
        } else {
            appServerErrorUtil(res, dispatch)
        }
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    }
}




