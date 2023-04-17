import React from 'react';
import s from 'features/NewsBar/NewsBar.module.scss'
import {News} from "features/NewsBar/News/News";
import imgNews from 'common/assets/img/rmate4.jpg'
import rainbowFlag from 'common/assets/img/rainbow-flag.jpg'

export const NewsBar = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.newsBlock}>
                <h2>What's happening?</h2>
                <News title={'Happy Birthday, Osahan!'}
                      topic={'Celebrity'}
                      hashtag={'#HappyBirthdayJohnSmith'}
                      img={imgNews}/>
                <News title={'Discere constituto vituperatoribus ad vis, in pri atqui animal assueverit'}
                      topic={'Trending in India'}
                      hashtag={'#ME11Lite'}/>
                <News title={'Sed do eiusmod tempor incididunt ut labore et dolore'}
                      topic={'Design'}
                      hashtag={'#HappyBirthdayJohnSmith'}
                      img={rainbowFlag}/>
            </div>
        </div>
    );
};
