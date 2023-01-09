import {v1} from "uuid";
import {ItemsResponseType, ResponseType} from "../components/Users/UsersContainer";

// const initialState = {
//     users: [
//         // {id: v1(), name: 'Artem', age: 22, avatar: 'https://pngimg.com/uploads/alien/alien_PNG25.png', followStatus: true, textStatus: 'Hey, I am photographer', location: {country: 'Russia', city: 'Vyksa'},},
//         // {id: v1(), name: 'Anton', age: 18, avatar: 'https://pngimg.com/uploads/alien/alien_PNG37.png', followStatus: true, textStatus: 'Hello, I am 3D designer', location: {country: 'Ukraine', city: 'Kiev'},},
//         // {id: v1(), name: 'Nikita', age: 20, avatar: 'https://pngimg.com/uploads/alien/alien_PNG16.png', followStatus: true, textStatus: 'Hi, I am weed smoker', location: {country: 'Russia', city: 'Penza'},},
//         // {id: v1(), name: 'Jirka', age: 24, avatar: 'https://pngimg.com/uploads/alien/alien_PNG22.png', followStatus: false, textStatus: 'I am looking for new friends', location: {country: 'Czech Republic', city: 'Prague'},},
//     ]
// }

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
    currentPage: 1
}

export const UsersPageReducer = (state:ResponseType = initialState, action: GeneralACType):ResponseType => {
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
        default: return state
    }
}

type GeneralACType = FollowACType | UnfollowACType | SetUsersACType | SetTotalCountACType | SetCurrentPageACType
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}
export const setUsersAC = (items: ItemsResponseType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            items
        }
    } as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}