import {Dispatch} from "redux";
import {authAPI, LoginType} from "api/auth-api";
import {appServerErrorUtil} from "common/utils/app-server-error-util";
import {appNetworkErrorUtil} from "common/utils/app-network-error-util";

type InitialStateType = typeof initialState

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        case "LOGIN":
            return {...state, isAuth: action.payload.value}
        default: return state
    }
}

// actions
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

// thunks
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

// types
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


