import React, {useEffect} from 'react';
import s from 'features/components/UsersRecommends/UsersRecommends.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "app/store";
import {getUsersRecTC} from "store/usersRecommendationReducer";
import {ItemsResponseType} from "store/UsersPageReducer";
import Recommendation from "features/components/UsersRecommends/Recommendation/Recommendation";

export const UsersRecommends = () => {

    const usersRecommends = useSelector<AppRootStateType, ItemsResponseType[]>(state => state.usersRecommends.items)
    const dispatch = useAppDispatch()

    const usersAmount = 5;

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        dispatch(getUsersRecTC(getRandomInt(1, 10), usersAmount))
    }, [dispatch])


    return (
        <div className={s.mainContainer}>
            <div className={s.recommendationBlock}>
                <h2>Who to follow?</h2>
                {usersRecommends.map((el) => {
                    return <Recommendation user={el}/>
                })}
            </div>
        </div>
    );
};

