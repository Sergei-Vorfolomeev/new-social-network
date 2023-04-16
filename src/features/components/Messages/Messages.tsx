import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from 'features/components/Messages/Messages.module.scss'
import {Message} from "features/components/Messages/Message/Message";
import {MessagesPagePropsType} from "features/components/Messages/MessagesContainer";
import SendIcon from "@mui/icons-material/Send";
import defaultAva from 'common/assets/img/defaultAva.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router-dom";

export const Messages: React.FC<MessagesPagePropsType> = (props) => {

    const navigate = useNavigate()

    const [newMessage, setNewMessage] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        if (newMessage !== '') {
            props.sendMessage(newMessage.trim())
            setNewMessage('')
        }
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') sendMessageHandler()
    }
    // if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
            <div className={s.mainContainer}>

                <div className={s.headerMessage}>
                    <ArrowBackIosIcon className={s.arrowBack} onClick={() => {navigate(-1)}}/>
                    <img src={defaultAva} alt="avatar" className={s.avatar} />
                </div>

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
                            <SendIcon />
                        </button>

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



