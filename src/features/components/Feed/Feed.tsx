import React, {useEffect} from 'react';
import {ArticleType, getNewsTC} from "features/components/Feed/feedReducer";
import {AppRootStateType, useAppDispatch} from "app/store";
import {useSelector} from "react-redux";
import s from './Feed.module.scss'
import {FeedItem} from "features/components/Feed/FeedItem/FeedItem";
import CircularProgress from "@mui/material/CircularProgress";

const Feed = () => {

    const articles = useSelector<AppRootStateType, ArticleType[]>(state => state.feed.articles)
    const loading = useSelector<AppRootStateType, boolean>(state => state.feed.loading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getNewsTC())
    },[])

    if (loading) return <div className={s.loading}><CircularProgress/></div>

    return (
        <div className={s.mainContainer}>
            {articles.map(el => {
                return (
                        <FeedItem
                        title={el.title}
                        description={el.description}
                        sourceName={el.source.name}
                        imgUrl={el.urlToImage} />
                )
            })}
        </div>
    );
};

export default Feed;



