import axios from "axios";
import {ArticleType} from "features/components/Feed/feedReducer";

type FeedResponseType = {
    status: string
    totalResults: number
    articles: ArticleType[]
}

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines/',
    // withCredentials: true,
    // headers: {
    //     'API-KEY': '9b7bf10d-55fc-4d6e-b69f-50e6002c9999'
    // }
})

export const feedAPI = {
    getNews (sources: string, apiKey: string) {
        return instance.get<FeedResponseType>(`?sources=${sources}&apiKey=${apiKey}`)
            .then(res => res.data)
    }
}