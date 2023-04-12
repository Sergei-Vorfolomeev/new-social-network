import {ItemsResponseType} from "store/UsersPageReducer";
import {Dispatch} from "redux";
import {usersAPI} from "api/api";


type InitialStateType = typeof initialState

const initialState = {
    items: [] as ItemsResponseType[],
    totalCount: 0
}

export const usersRecommendationReducer = (state: InitialStateType = initialState, action: UsersRecommendActionsType):InitialStateType => {
    switch (action.type) {
        case 'rec/SET_USERS': return {...state, items: action.payload.items};
        case "SET-TOTAL-COUNT": return {...state, totalCount: action.payload.totalCount}
        default: return state;
    }
}
//actions
const setUsersRecAC = (items: ItemsResponseType[]) => {
    return {
        type: 'rec/SET_USERS',
        payload: {
            items
        }
    } as const
}
const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}


//thunks
export const getUsersRecTC = (portionValue: number, portionSize: number) => (dispatch: Dispatch) => {
    usersAPI.getUsers(portionValue, portionSize)
        .then(res => {
            dispatch(setUsersRecAC(res.items))
            dispatch(setTotalCountAC(res.totalCount))
        })
}

//types
type UsersRecommendActionsType = SetUsersRecACType | SetTotalCountACType
type SetUsersRecACType = ReturnType<typeof setUsersRecAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>

