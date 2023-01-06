import React from 'react';
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {NavBarPropsType} from "./NavBarContainer";
import {FriendsInNavBar, FriendsInNavBarPropsType} from "../Header/FriendsInNavBar";

export const NavBar = (props: NavBarPropsType) => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink to={'/profile'} className={navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/users'} className={navData => navData.isActive ? styles.active : styles.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/news'} className={navData => navData.isActive ? styles.active : styles.item}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/messages'} className={navData => navData.isActive ? styles.active : styles.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/music'} className={navData => navData.isActive ? styles.active : styles.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings'} className={navData => navData.isActive ? styles.active : styles.item}>Settings</NavLink>
            </div>
            <h3>Friends</h3>
            <div className={styles.friendsInNavbar}>
                {props.navBar.friendsInNavBar.map((el: FriendsInNavBarPropsType) => {
                    return(
                        <FriendsInNavBar key={el.id} id={el.id} name={el.name} avatar={el.avatar}/>
                    )
                })}
            </div>
        </nav>
    );
};
