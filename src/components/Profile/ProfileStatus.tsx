import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void

}

export const ProfileStatus = ({status, updateStatus}: ProfileStatusPropsType) => {

    console.log(status)

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(status)

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
    console.log(status)

    return (
        <div>
            {editMode
                ? <div><input type="text"
                              value={newStatus}
                              onBlur={switchEditMode}
                              autoFocus
                              onChange={onChangeHandler}
                              onKeyDown={onEnterHandler}/>
                </div>
                : <div><span onDoubleClick={switchEditMode}>{status || 'No status'}</span></div>
            }
        </div>
    );
};
