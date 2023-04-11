import React from 'react';
import styles from './Post.module.css'

type PostType = {
    id: string
    text: string
    likesCount: number
    index: number
}

export const Post = (props:PostType) => {

    // const post = useSelector<AppRootStateType, PostsType>(state => state.profilePage.posts[props.index])

    return (
        <div className={styles.item}>
            <img src="https://pngimg.com/uploads/alien/alien_PNG27.png" alt="alien"></img>
            {props.text}
            <div>
                like: {props.likesCount}
            </div>
        </div>
    );
};

