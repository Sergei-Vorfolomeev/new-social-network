import React from 'react';
import styles from './FriendsInNavBar.module.css'

type FriendsInNavBarPropstype = {
    id: string
    name: string
    avatar: string
}

export const FriendsInNavBar = (props: FriendsInNavBarPropstype) => {
    return (
        <div className={styles.friendsInNavBar}>
            <div>
                <img src={props.avatar} alt={'ava'}/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
};
