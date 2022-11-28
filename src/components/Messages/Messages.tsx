import React, {useRef} from 'react';
import styles from './Messages.module.css'
import {FriendsInMessages} from "./FriendsInMessages";
import {Dialogs} from "./Dialogs";
import {GeneralACType, MessagePageType, sendMessageAC} from "../../redux/state";

type MessagesPagePropsType = {
    messagePage: MessagePageType
    dispatch: (action: GeneralACType) => void
}

export const Messages: React.FC<MessagesPagePropsType> = (props) => {
    const newMessage = useRef<HTMLTextAreaElement>(null)

    const sendMessageHandler = () => {
        if (newMessage.current) {
            const text = newMessage.current.value
            const action = sendMessageAC(text)
            props.dispatch(action)
            newMessage.current.value = ''
        }
    }

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
                        <Dialogs key={el.id}
                                 id={el.id}
                                 message={el.message}/>
                    )
                })}
                <div className={styles.sendForm}>
                    <textarea ref={newMessage}/>
                    <button onClick={sendMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};



