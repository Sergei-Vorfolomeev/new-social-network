import React from 'react';
import s from 'features/components/NavBar/NavBar.module.scss'
import {NavLink} from "react-router-dom";
import {NavBarPropsType} from "features/components/NavBar/NavBarContainer";
import logo from 'common/assets/img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EmailIcon from '@mui/icons-material/Email';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = ({}: NavBarPropsType) => {
    return (
        <nav className={s.navBar}>
            <div className={s.logoBox}>
                <img src={logo} alt="logo" className={s.logoImg}/>
            </div>
            <ul className={s.navItemsList}>
                <li className={s.item}>
                    <NavLink to={'/feed'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><HomeIcon fontSize={"large"}/></span>
                        Feed
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/trending'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><WhatshotIcon fontSize={"large"}/></span>
                        Trending
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><AccountCircleIcon fontSize={"large"}/></span>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/messages'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><EmailIcon fontSize={"large"}/></span>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/music'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><MusicNoteIcon fontSize={"large"}/></span>
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/settings'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><SettingsIcon fontSize={"large"}/></span>
                        Settings
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/logout'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><LogoutIcon fontSize={"large"}/></span>
                        Logout
                    </NavLink>
                </li>
            </ul>


        </nav>
    );
};
