import React from 'react';
import styles from './Messages.module.css'
import {NavLink} from "react-router-dom";
import {FriendsInMessages} from "./FriendsInMessages";
import {v1} from "uuid";
import {Dialogs} from "./Dialogs";

export const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={styles.friendList}>
               <FriendsInMessages id={v1()} name={'Vadim'}/>
               <FriendsInMessages id={v1()} name={'Tolya'}/>
               <FriendsInMessages id={v1()} name={'Elina'}/>
               <FriendsInMessages id={v1()} name={'Lenya'}/>
               <FriendsInMessages id={v1()} name={'Fedya'}/>
            </div>
            <div className={styles.dialogs}>
                <Dialogs message={'Hello'}/>
                <Dialogs message={'How are you?'}/>
                <Dialogs message={'The asteroid is flying to our planet!'}/>
            </div>
        </div>
    );
};



