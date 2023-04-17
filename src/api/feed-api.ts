import axios from "axios";
import {ArticleType} from "features/Feed/feedReducer";

type FeedResponseType = {
    status: string
    totalResults: number
    articles: ArticleType[]
}

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines/',
})

export const feedAPI = {
    getNews (sources: string, apiKey: string) {
        return instance.get<FeedResponseType>(`?sources=${sources}&apiKey=${apiKey}`)
            .then(res => res.data)
    }
}