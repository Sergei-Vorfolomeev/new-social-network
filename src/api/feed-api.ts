import axios from "axios";
import {ArticleType} from "features/Feed/feedReducer";

// type FeedResponseType = {
//     status: string
//     totalResults: number
//     articles: ArticleType[]
// }
//
// const instance = axios.create({
//     baseURL: 'https://newsapi.org/v2/top-headlines/',
// })
//
//
// export const feedAPI = {
//     getNews (sources: string, apiKey: string) {
//         return instance.get<FeedResponseType>(`?sources=${sources}&apiKey=${apiKey}`)
//             .then(res => res.data)
//     }
// }

type FeedResponseType = {
    status: string
    totalResults: number
    articles: ArticleType[]
}

const instance = axios.create({
    baseURL: 'https://api.newscatcherapi.com/',
    params: {lang: 'en', sort_by: 'relevancy'},
    headers: {
        'x-api-key': '_3GZ_2y-RjDVGLCvTaPjlblxs9mlvuUiU9TrPwS5CPs'
    }
})


export const feedAPI = {
    getNews() {
        return instance.get<ResponseType>('v2/search?q=czech&topic=news&page_size=5')
            .then(res => res.data)
    }
}

type ResponseType = {
    status: string
    total_hits: number
    page: number
    total_pages: number
    page_size: number
    articles: ArticleType2[]
}

export type ArticleType2 = {
    title: string
    author: string
    published_date: string
    "published_date_precision": string
    "link": string
    "clean_url": string
    excerpt: string
    summary: string
    "rights": string
    "rank": number
    "topic": string
    "country": string
    "language": string
    "authors": string
    "media": string
    "is_opinion": boolean,
    "twitter_account": null | string,
    "_score": number
    "_id": string
}

