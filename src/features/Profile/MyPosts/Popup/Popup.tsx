import React from 'react';
import s from 'features/Profile/MyPosts/Popup/Popup.module.scss'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {deletePostAC} from "features/Profile/profilePageReducer";
import {useAppDispatch} from "app/store";

type PropsType = {
    postId: string
    editPost: (value:boolean) => void
    setOpenPopup: (openPopup: boolean) => void
}

export const Popup = ({postId, editPost, setOpenPopup}: PropsType) => {

    const dispatch = useAppDispatch()

    const editPostHandler = () => {
        editPost(true)
        setOpenPopup(false)
    }

    const deletePostHandler = () => {
        dispatch(deletePostAC(postId))
    }

    return (
        <div className={s.mainContainer}>
            <span className={s.menuItem} onClick={editPostHandler}><ModeEditIcon className={s.iconItem}/>Edit</span>
            <span className={s.menuItem} onClick={deletePostHandler}><DeleteIcon className={s.iconItem}/>Delete</span>
        </div>
    );
};
