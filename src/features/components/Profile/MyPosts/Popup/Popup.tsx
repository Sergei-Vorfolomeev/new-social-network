import React from 'react';
import s from './Popup.module.scss'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {deletePostAC} from "store/profilePageReducer";
import {useAppDispatch} from "app/store";

type PropsType = {
    postId: string
}

export const Popup = ({postId}: PropsType) => {

    const dispatch = useAppDispatch()

    const editPostHandler = () => {

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
