import React from 'react';
import s from "./Post.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType, PostType} from "app/store";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type PropsType = {
    post: PostType
}

export const Post = ({post}: PropsType) => {

    const name = useSelector((state: AppRootStateType) => state.profilePage.profile?.fullName)
    const avatar = useSelector((state: AppRootStateType) => state.profilePage.profile?.photos.small)
    // const post = useSelector<AppRootStateType, PostsType>(state => state.profilePage.posts[props.index])

    return (

        <div className={s.myPostContainer}>

            <div className={s.avatar}>
                <img src={avatar} alt=""/>
            </div>

            <div className={s.postContent}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.postText}>{post.text}</p>
                <p className={s.like}><ThumbUpIcon/>&nbsp;{post.likesCount}</p>
            </div>

        </div>

        // <div className={styles.item}>
        //     <img src="https://pngimg.com/uploads/alien/alien_PNG27.png" alt="alien"></img>
        //     {props.text}
        //     <div>
        //         like: {props.likesCount}
        //     </div>
        // </div>
    );
};

