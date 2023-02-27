import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status?: string
}

export const ProfileStatus = ({status}: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string | undefined>(status)

    const switchEditMode = () => {
        setEditMode(!editMode)
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
        <div>
            {editMode
                ? <div><input type="text"
                              value={newStatus}
                              onBlur={switchEditMode}
                              autoFocus
                              onChange={onChangeHandler}
                              onKeyDown={onEnterHandler}/>
                </div>
                : <div><span onDoubleClick={switchEditMode}>{newStatus}</span></div>
            }
        </div>
    );
};
