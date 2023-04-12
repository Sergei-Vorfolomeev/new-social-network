import React from 'react';
import s from './Button.module.scss'

type PropsType = {
    name: string
    callback: () => void
    disabled?: boolean
    style?: {}
}

export const Button = ({name, callback, style, disabled}: PropsType) => {
    return (
        <button type="button"
                onClick={() => callback()}
                className={s.button}
                disabled={disabled}
                style={style}
        >
            {name}
        </button>
    );
};
