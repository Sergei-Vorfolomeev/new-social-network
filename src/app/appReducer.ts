import {Action, AnyAction, Dispatch} from "redux";
import {meTC} from "store/authReducer";
import {ThunkDispatch} from "redux-thunk";

type InitialStateType = typeof initialState

const initialState = {
    isInitialized: false,
    error: '' as string | null,
    loading: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_IS_INITIALIZED": {
            return {
                ...state,
                isInitialized: action.payload.value
            }
        }
        case "SET_ERROR": {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default:
            return state
    }
}

export type ActionsType = InitializeAppACType | SetErrorACType
type InitializeAppACType = ReturnType<typeof initializeAppAC>
type SetErrorACType = ReturnType<typeof setErrorAC>

// ACTION CREATORS
export const initializeAppAC = (value: boolean) => {
    return {
        type: 'SET_IS_INITIALIZED',
        payload: {
            value
        }
    } as const
}
export const setErrorAC = (error: string | null) => {
    return {
        type: 'SET_ERROR',
        payload: {
            error
        }
    } as const
}

export const initializeAppTC = () => (dispatch: Dispatch & ThunkDispatch<any, undefined, AnyAction>) => {
    const promise = dispatch(meTC())
    Promise.all([promise])
        .then(
            () => dispatch(initializeAppAC(true))
        )
}