import React from 'react';
import styles from "features/components/Messages/Messages.module.css";

type DialogsPropsType = {
    id: string
    message: string
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={styles.dialogItem}>
            {props.message}
        </div>
    );
};
