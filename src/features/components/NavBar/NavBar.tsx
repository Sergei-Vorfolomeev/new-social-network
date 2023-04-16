import React from 'react';
import s from 'features/components/NavBar/NavBar.module.scss'
import {NavLink} from "react-router-dom";
import logo from 'common/assets/img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import WbSunnyIcon from '@mui/icons-material/WbSunny';import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import {logoutTC} from "store/authReducer";
import {useAppDispatch} from "app/store";

export const NavBar = () => {

    const dispatch = useAppDispatch()

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
                    <NavLink to={'/profile'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><AccountCircleIcon fontSize={"large"}/></span>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/users'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><GroupIcon fontSize={"large"}/></span>
                        Users
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
                    <NavLink to={'/weather'}
                             className={navData => navData.isActive ? s.active : s.nonActive}>
                        <span className={s.iconItem}><WbSunnyIcon fontSize={"large"}/></span>
                        Weather
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
                    <NavLink to={'/login'}
                             className={navData => navData.isActive ? s.active : s.nonActive}
                    onClick={() => dispatch(logoutTC())}>
                        <span className={s.iconItem}><LogoutIcon fontSize={"large"}/></span>
                        Logout
                    </NavLink>
                </li>
            </ul>


        </nav>
    );
};
