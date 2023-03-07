import {Action, AnyAction, Dispatch} from "redux";
import {meTC} from "../store/authReducer";
import {ThunkDispatch} from "redux-thunk";

type InitialStateType = typeof initialState

const initialState = {
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET/IS-INITIALIZED": {
            return {
                ...state,
                isInitialized: action.payload.value
            }
        }
        default:
            return state
    }
}

export type ActionsType = InitializeAppACType
type InitializeAppACType = ReturnType<typeof initializeAppAC>

// ACTION CREATORS
export const initializeAppAC = (value: boolean) => {
    return {
        type: 'SET/IS-INITIALIZED',
        payload: {
            value
        }
    } as const
}

export const initializeAppTC = () => (dispatch: Dispatch<Action<any>> & ThunkDispatch<any, undefined, AnyAction>) => {
    const promise = dispatch(meTC())
    Promise.all([promise])
        .then(
            () => dispatch(initializeAppAC(true))
        )
}