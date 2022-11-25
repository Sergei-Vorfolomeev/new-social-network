import styles from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type FriendsInMessagesPropsType = {
    id: string
    name: string
}

export const FriendsInMessages = (props:FriendsInMessagesPropsType) => {
    let path = '/messages/' + props.id
    return (
        <div>
            <div className={styles.friend}>
                <NavLink to={path} className={navData => navData.isActive ? styles.active : styles.friend}>{props.name}</NavLink>
            </div>
        </div>
    );
};