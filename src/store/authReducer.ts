
type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
}

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data
            }
        default:
            return state
    }
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


