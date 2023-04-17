import React from 'react';
import s from 'features/NavBar/NavBar.module.scss'
import {NavLink} from "react-router-dom";
import logo from 'common/assets/img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import GroupIcon from '@mui/icons-material/Group';
import {logoutTC} from "features/Login/authReducer";
import {AppRootStateType, useAppDispatch} from "app/store";
import {useSelector} from "react-redux";

export const NavBar = () => {

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
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

                {isAuth
                    ? <li className={s.item}>
                        <NavLink to={'/login'}
                                 className={navData => navData.isActive ? s.active : s.nonActive}
                                 onClick={() => dispatch(logoutTC())}>
                            <span className={s.iconItem}><LogoutIcon fontSize={"large"}/></span>
                            Logout
                        </NavLink>
                    </li>
                    : <li className={s.item}>
                        <NavLink to={'/login'}
                                 className={navData => navData.isActive ? s.active : s.nonActive}>
                            <span className={s.iconItem}><LoginIcon fontSize={"large"}/></span>
                            Login
                        </NavLink>
                    </li>
                }
            </ul>
        </nav>
    );
};
