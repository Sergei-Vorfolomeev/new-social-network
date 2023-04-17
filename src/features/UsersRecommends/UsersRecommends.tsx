import React, {useEffect} from 'react';
import s from 'features/UsersRecommends/UsersRecommends.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "app/store";
import {getUsersTC, ItemsResponseType} from "features/Users/UsersPageReducer";
import Recommendation from "features/UsersRecommends/Recommendation/Recommendation";
import {Button} from "common/components/Button/Button";
import {useNavigate} from "react-router-dom";

export const UsersRecommends = () => {

    const usersRecommends = useSelector<AppRootStateType, ItemsResponseType[]>(state => state.usersPage.items)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const usersAmount = 5;

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        dispatch(getUsersTC(getRandomInt(1, 10), usersAmount))
    }, [dispatch])


    return (
        <div className={s.mainContainer}>
            <div className={s.recommendationsBlock}>
                <h2>Who to follow?</h2>
                {usersRecommends.map((el) => {
                    return <Recommendation key={el.id} user={el}/>
                })}
            </div>
            <div className={s.buttonBlock}>
                <Button name={'Show all users'} callback={() => {navigate('/users')}}/>
            </div>
        </div>
    );
};

