import styles from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type FriendsInMessagesPropsType = {
    id: string
    name: string
    avatar: string
}

export const FriendsInMessages = (props:FriendsInMessagesPropsType) => {
    let path = '/messages/' + props.id
    return (
        <div>
            <div className={styles.friend}>
                <NavLink to={path} className={navData => navData.isActive ? styles.active : styles.friend}>
                    <img src={props.avatar} alt={'ava'}/>
                    {props.name}
                </NavLink>
            </div>
        </div>
    );
};