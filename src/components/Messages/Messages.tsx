import React from 'react';
import styles from './Messages.module.css'
import {NavLink} from "react-router-dom";
import {FriendsInMessages} from "./FriendsInMessages";
import {v1} from "uuid";
import {Dialogs} from "./Dialogs";
import {MessagePageType} from "../../index";

type MessagesPagePropsType = {
    messagePage: MessagePageType
}

export const Messages: React.FC<MessagesPagePropsType> = (props) => {
    return (
        <div className={styles.messages}>
            <div className={styles.friendList}>
                {props.messagePage.friendsInMessages.map(el => {
                    return (
                        <FriendsInMessages key={el.id} id={el.id} name={el.name} avatar={el.avatar}/>
                    )
                })}
            </div>
            <div className={styles.dialogs}>
                {props.messagePage.messages.map(el => {
                    return (
                        <Dialogs key={el.id} id={el.id} message={el.message}/>
                    )
                })}
            </div>
        </div>
    );
};



