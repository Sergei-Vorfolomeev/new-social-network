import React, {useState} from 'react';
import s from "./Post.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType, PostType} from "app/store";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import defaultAvatar from 'common/assets/img/defaultAva.png'


type PropsType = {
    post: PostType
}

export const Post = ({post}: PropsType) => {

    const name = useSelector((state: AppRootStateType) => state.profilePage.profile?.fullName)
    const avatar = useSelector((state: AppRootStateType) => state.profilePage.profile?.photos.small)

    const [like, setLike] = useState(false)

    return (

        <div className={s.myPostContainer}>

            <div className={s.avatar}>
                {avatar
                ? <img src={avatar} alt="avatar"/>
                : <img src={defaultAvatar} alt="defaultAvatar"/>}

            </div>

            <div className={s.postContent}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.postText}>{post.text}</p>
                <span className={like ? s.like : s.unlike} onClick={() => setLike(!like)}><ThumbUpIcon/></span>
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

