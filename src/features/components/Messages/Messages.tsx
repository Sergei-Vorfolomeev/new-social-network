import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from 'features/components/Messages/Messages.module.scss'
import {Message} from "features/components/Messages/Message/Message";
import {MessagesPagePropsType} from "features/components/Messages/MessagesContainer";
import SendIcon from "@mui/icons-material/Send";

export const Messages: React.FC<MessagesPagePropsType> = (props) => {

    const [newMessage, setNewMessage] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        if (newMessage) {
            props.sendMessage(newMessage.trim())
            setNewMessage('')
        }
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') sendMessageHandler()
    }
    // if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.messages}>

            {/*<div className={styles.friendList}>*/}
            {/*    {props.messagePage.friendsInMessages.map(el => {*/}
            {/*        return (*/}
            {/*            <FriendsInMessages key={el.id} id={el.id} name={el.name} avatar={el.avatar}/>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}

            <div className={s.mainContainer}>

                <div className={s.dialog}>
                    {props.messagePage.messages.map(el => {
                        return (
                            <Message key={el.id}
                                     id={el.id}
                                     message={el.message}/>
                        )
                    })}
                    <div className={s.sendFormContainer}>

                     <textarea onChange={onChangeHandler}
                               value={newMessage}
                               className={s.textarea}
                               placeholder={'Write a message...'}
                               onKeyDown={onEnterHandler}
                     />
                        <button onClick={sendMessageHandler}
                                className={s.button}
                        >
                            <SendIcon/>
                        </button>

                    </div>
                </div>
            </div>

            {/*<div className={s.dialogs}>*/}
            {/*    {props.messagePage.messages.map(el => {*/}
            {/*        return (*/}
            {/*            <Message key={el.id}*/}
            {/*                     id={el.id}*/}
            {/*                     message={el.message}/>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*    <div className={s.sendForm}>*/}
            {/*        <textarea ref={newMessage}/>*/}
            {/*        <button onClick={sendMessageHandler}>Send</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};



