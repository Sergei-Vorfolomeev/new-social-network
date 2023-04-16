import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.scss'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export const ProfileStatus = ({status, updateStatus}: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(status)

    useEffect(() => {
        setNewStatus(status)
    }, [status])

    const switchEditMode = () => {
        if (editMode) {
            setEditMode(!editMode)
            updateStatus(newStatus)
        } else {
            setEditMode(!editMode)
        }

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value.trim())
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            switchEditMode()
        }
    }

    return (
        <>
            {editMode
                ? <input type="text"
                         value={newStatus}
                         onBlur={switchEditMode}
                         autoFocus
                         onChange={onChangeHandler}
                         onKeyDown={onEnterHandler}
                         className={s.input}
                         placeholder={'Type your status'}/>
                : <span onDoubleClick={switchEditMode}>{status || 'No status'}</span>
            }
        </>
    );
};
