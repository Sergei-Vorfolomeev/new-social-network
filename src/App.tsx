import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {NavBarContainer} from "./components/NavBar/NavBarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

function App() {

    return (
        <div className="appWrapper">
            <Header/>
            <NavBarContainer/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path={'/profile/*'} element={<Profile/>}/>
                    <Route path={'/users/*'} element={<UsersContainer/>}/>
                    <Route path={'/messages/*'} element={<MessagesContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
