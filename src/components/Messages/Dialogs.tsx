import React from 'react';
import styles from "./Messages.module.css";
import {GeneralACType} from "../../redux/state";

type DialogsPropsType = {
    id: string
    message: string
}

export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={styles.dialogItem}>
            {props.message}
        </div>
    );
};
