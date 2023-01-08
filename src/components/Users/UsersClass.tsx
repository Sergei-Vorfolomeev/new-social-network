import React from "react";
import styles from "./Users.module.css";
import {ItemsResponseType, ResponseType, UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {AppRootStateType} from "../../store/store";

export class UsersClass extends React.Component<UsersPropsType, ResponseType> {
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