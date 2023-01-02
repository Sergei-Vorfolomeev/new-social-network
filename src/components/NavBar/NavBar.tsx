import React from 'react';
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {NavBarType} from "../../redux/store-redux";
import {FriendsInNavBar} from "../Header/FriendsInNavBar";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store-redux";

type NavBarPropsType = {
    // navBar: NavBarType
}

export const NavBar:React.FC<NavBarPropsType> = () => {

    const navBar = useSelector<AppRootStateType, NavBarType>(state => state.navBar)
    const dispatch = useDispatch()

    return (
        <nav className={styles.nav}>
            <div>
                <NavLink to={'/profile'} className={navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink>
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
                {navBar.friendsInNavBar.map(el => {
                    return(
                        <FriendsInNavBar key={el.id} id={el.id} name={el.name} avatar={el.avatar}/>
                    )
                })}
            </div>
        </nav>
    );
};
