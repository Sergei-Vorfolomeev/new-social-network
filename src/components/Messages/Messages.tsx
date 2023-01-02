import React, {useRef} from 'react';
import styles from './Messages.module.css'
import {FriendsInMessages} from "./FriendsInMessages";
import {Dialogs} from "./Dialogs";
import {sendMessageAC} from "../../redux/messagePageReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, MessagePageType} from "../../redux/store-redux";

type MessagesPagePropsType = {
    // messagePage: MessagePageType
    // dispatch: (action: GeneralACType) => void
}

export const Messages: React.FC<MessagesPagePropsType> = (props) => {

    const messagePage = useSelector<AppRootStateType, MessagePageType>(state => state.messagePage)
    const dispatch = useDispatch()

    const newMessage = useRef<HTMLTextAreaElement>(null)

    const sendMessageHandler = () => {
        if (newMessage.current) {
            const text = newMessage.current.value
            dispatch(sendMessageAC(text))
            newMessage.current.value = ''
        }
    }

    return (
        <div className={styles.messages}>
            <div className={styles.friendList}>
                {messagePage.friendsInMessages.map(el => {
                    return (
                        <FriendsInMessages key={el.id} id={el.id} name={el.name} avatar={el.avatar}/>
                    )
                })}
            </div>
            <div className={styles.dialogs}>
                {messagePage.messages.map(el => {
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



