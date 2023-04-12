import React from 'react';
import s from './News.module.scss'

type PropsType = {
    topic: string
    title: string
    hashtag: string
    img?: string
}

export const News = ({title, topic, hashtag,img}: PropsType) => {
    return (
        <div className={s.newsBlock}>
            <div className={s.newsInfo}>
                <p className={s.topic}>{topic}</p>
                <h3 className={s.title}>{title}</h3>
                <p className={s.hashtag}>{hashtag}</p>
            </div>
            <div className={s.imgContainer}>
                {img && <img src={img} alt="img"/>}
            </div>
        </div>
    );
};
