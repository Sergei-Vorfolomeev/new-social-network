import React, {useEffect} from 'react';
import {ArticleType, getNewsTC} from "features/components/Feed/feedReducer";
import {AppRootStateType, useAppDispatch} from "app/store";
import {useSelector} from "react-redux";
import s from './Feed.module.scss'
import {FeedItem} from "features/components/Feed/FeedItem/FeedItem";
import {Loader} from "features/components/common/Loader/Loader";

const Feed = () => {

    const articles = useSelector<AppRootStateType, ArticleType[]>(state => state.feed.articles)
    const loading = useSelector<AppRootStateType, boolean>(state => state.app.loading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getNewsTC())
    },[])

    if (loading) return <Loader/>

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



