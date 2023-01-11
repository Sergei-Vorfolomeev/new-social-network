import {v1} from "uuid";

// const initialState = {
//     users: [
//         // {id: v1(), name: 'Artem', age: 22, avatar: 'https://pngimg.com/uploads/alien/alien_PNG25.png', followStatus: true, textStatus: 'Hey, I am photographer', location: {country: 'Russia', city: 'Vyksa'},},
//         // {id: v1(), name: 'Anton', age: 18, avatar: 'https://pngimg.com/uploads/alien/alien_PNG37.png', followStatus: true, textStatus: 'Hello, I am 3D designer', location: {country: 'Ukraine', city: 'Kiev'},},
//         // {id: v1(), name: 'Nikita', age: 20, avatar: 'https://pngimg.com/uploads/alien/alien_PNG16.png', followStatus: true, textStatus: 'Hi, I am weed smoker', location: {country: 'Russia', city: 'Penza'},},
//         // {id: v1(), name: 'Jirka', age: 24, avatar: 'https://pngimg.com/uploads/alien/alien_PNG22.png', followStatus: false, textStatus: 'I am looking for new friends', location: {country: 'Czech Republic', city: 'Prague'},},
//     ]
// }

export type UsersResponseType = {
    items: ItemsResponseType[]
    totalCount: number
    error: string | null
    pageSize: number
    currentPage: number
    isFetching: boolean
}
export type ItemsResponseType = {
    name: string
    id: number
    photos: {
        small: undefined | string
        large: undefined | string
    },
    status: null | string
    "followed": boolean
}

const initialState = {
    items: [
        // {
        //     "name": "Shubert",
        //     "id": 1,
        //     "photos": {
        //         "small": undefined,
        //         "large": undefined
        //     },
        //     "status": null,
        //     "followed": false
        // },
        // {
        //     "name": "Hacker",
        //     "id": 2,
        //     "photos": {
        //         "small": undefined,
        //         "large": undefined
        //     },
        //     "status": null,
        //     "followed": false
        // }
    ],
    totalCount: 0,
    error: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: false
}

export const UsersPageReducer = (state:UsersResponseType = initialState, action: GeneralACType):UsersResponseType => {
    switch (action.type) {
        case 'FOLLOW': {
            return  {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                items: [
                    // ...state.items,
                    ...action.payload.items
                ]
            }
        }
        case "SET-TOTAL-COUNT": {
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.payload.pageNumber
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.payload.value
            }
        }
        default: return state
    }
}

type GeneralACType =
    FollowACType |
    UnfollowACType |
    SetUsersACType |
    SetTotalCountACType |
    SetCurrentPageACType |
    ToggleIsFetchingACType
type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetTotalCountACType = ReturnType<typeof setTotalCount>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}
export const setUsers = (items: ItemsResponseType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            items
        }
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}
export const toggleIsFetching = (value: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            value
        }
    } as const
}