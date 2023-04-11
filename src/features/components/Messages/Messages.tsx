import React, {useRef} from 'react';
import styles from 'features/components/Messages/Messages.module.css'
import {FriendsInMessages} from "features/components/Messages/FriendsInMessages";
import {Dialogs} from "features/components/Messages/Dialogs";
import {MessagesPagePropsType} from "features/components/Messages/MessagesContainer";

export const Messages: React.FC<MessagesPagePropsType> = (props) => {

    const newMessage = useRef<HTMLTextAreaElement>(null)

    const sendMessageHandler = () => {
        if (newMessage.current) {
            const text = newMessage.current.value
            // dispatch(sendMessageAC(text))
            props.sendMessage(text)
            newMessage.current.value = ''
        }
    }
    // if (!props.isAuth) return <Navigate to={'/login'}/>

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



