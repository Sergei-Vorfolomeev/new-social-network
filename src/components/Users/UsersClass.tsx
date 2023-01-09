import React from "react";
import styles from "./Users.module.css";
import {ItemsResponseType, ResponseType, UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {AppRootStateType} from "../../store/store";

export class UsersClass extends React.Component<UsersPropsType, ResponseType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data))
    }

    render () {
        return <>
            {this.props.users.map((el: ItemsResponseType) => {
                return (
                    <div className={styles.rootContainer}>
                        <div className={styles.avatarAndButtonContainer}>
                            {el.photos.small
                            ? <img src={el.photos.small} alt="avatar" className={styles.avatar}/>
                            : <img src="https://pngimg.com/uploads/alien/alien_PNG28.png" alt="default-avatar" className={styles.avatar}/>}
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