import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {NavBarContainer} from "./components/NavBar/NavBarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

function App() {

    return (
        <div className="appWrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/profile'} element={<ProfileContainer/>}/>
                    <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                    <Route path={'/users/*'} element={<UsersContainer/>}/>
                    <Route path={'/messages/*'} element={<MessagesContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
