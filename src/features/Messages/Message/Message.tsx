import React from 'react';
import s from "features/Messages/Message/Message.module.scss";

type PropsType = {
    id: string
    message: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={s.messageContainer}>
            <span>{props.message}</span>
        </div>
    );
};
