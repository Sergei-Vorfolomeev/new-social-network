import {Dispatch} from "redux";
import {feedAPI} from "api/feed-api";
import {setErrorAC, setLoadingAC} from "app/appReducer";
import {appNetworkErrorUtil} from "common/utils/app-network-error-util";

type InitialStateType = typeof initialState
type SourceType = {
    id: string
    name: string
}
export type ArticleType = {
    source: SourceType
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}
const initialState = {
    articles: [] as ArticleType[]
}

export const feedReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                articles: [...action.payload.news]
            }
        default:
            return state
    }
}

// actions
const setNewsAC = (news: ArticleType[]) => {
    return {
        type: 'SET_NEWS',
        payload: {
            news
        }
    } as const
}

// thunks
export const getNewsTC = () => async (dispatch: Dispatch) => {
    dispatch(setLoadingAC(true))
    try {
        const res = await feedAPI.getNews('bbc-news', '009b7c176c6d43e08f19076d737cb427')
        if (res.status === 'ok') {
            dispatch(setNewsAC(res.articles))
        } else {
            dispatch(setErrorAC('Some error occurred'))
        }
    } catch (e) {
        appNetworkErrorUtil(e, dispatch)
    } finally {
        dispatch(setLoadingAC(false))
    }
}


// actions types
type ActionsType = SetNewsACType
type SetNewsACType = ReturnType<typeof setNewsAC>
