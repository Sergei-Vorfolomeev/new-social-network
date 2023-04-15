import React from 'react';
import s from "./FeedItem.module.scss";

type PropsType = {
    title: string
    description: string
    sourceName: string
    imgUrl: string
}

export const FeedItem = ({title, description, sourceName, imgUrl}: PropsType) => {
    return (
        <div className={s.newsBlock}>
            <div className={s.imgContainer}>
                {imgUrl && <img src={imgUrl} alt="img"/>}
            </div>
            <div className={s.newsInfo}>
                <p className={s.topic}>{sourceName}</p>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
            </div>

        </div>
    );
};