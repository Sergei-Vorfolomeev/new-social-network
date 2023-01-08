import React from "react";
import styles from "./Users.module.css";
import {ItemsResponseType, UsersPropsType} from "./UsersContainer";
import axios from "axios";

export class UsersClass extends React.Component<any, any> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data))
    }

    render () {
        return <>
            {this.props.users.map((el: ItemsResponseType) => {
                return (
                    <div className={styles.rootContainer}>
                        <div className={styles.avatarAndButtonContainer}>
                            <img src={el.photos.small} alt="" className={styles.avatar}/>
                            <div>
                                {el.followed
                                    ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.infoUserContainer}>
                            <div>
                                <h4>{el.name}</h4>
                                {el.status}
                            </div>
                            {/*<div>*/}
                            {/*    <div>{el.location.country}</div>*/}
                            {/*    {el.location.city}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                )
            })}
        </>

    }
}