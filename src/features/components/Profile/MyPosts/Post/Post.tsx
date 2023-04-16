import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import s from "./Post.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType, PostType, useAppDispatch} from "app/store";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import defaultAvatar from 'common/assets/img/defaultAva.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Popup} from "features/components/Profile/MyPosts/Popup/Popup";
import {updatePostAC} from "store/profilePageReducer";


type PropsType = {
    post: PostType
}

export const Post = ({post}: PropsType) => {

    const name = useSelector((state: AppRootStateType) => state.profilePage.profile?.fullName)
    const avatar = useSelector((state: AppRootStateType) => state.profilePage.profile?.photos.small)
    const dispatch = useAppDispatch()

    const [openPopup, setOpenPopup] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [newPostText, setNewPostText] = useState(post.text)
    const [like, setLike] = useState(false)

    const editPost = () => {
        setEditMode(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        dispatch(updatePostAC(post.id, newPostText))
        setEditMode(false)
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(updatePostAC(post.id, newPostText))
            setEditMode(false)
        }
    }

    return (

        <div className={s.myPostContainer}>

            <div className={s.avatar}>
                {avatar
                    ? <img src={avatar} alt="avatar"/>
                    : <img src={defaultAvatar} alt="defaultAvatar"/>}

            </div>

            <div className={s.postContent}>
                <h2 className={s.name}>{name}</h2>
                {editMode
                    ? <input value={newPostText}
                             onChange={onChangeHandler}
                             onBlur={onBlurHandler}
                             onKeyDown={onEnterHandler}
                             autoFocus/>
                    : <span className={s.postText}>{post.text}</span>}
                {openPopup && <Popup postId={post.id}
                                     editPost={editPost}
                                     setOpenPopup={setOpenPopup}/>}
                <span className={s.postMenu} onClick={() => {
                    setOpenPopup(!openPopup)
                }}><MoreHorizIcon/></span>
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

