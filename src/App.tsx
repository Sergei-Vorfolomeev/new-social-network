import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";

function App() {
    return (
        <div className="appWrapper">
            <BrowserRouter>
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">
                <Routes>
                   <Route path={'/profile/*'} element={<Profile/>}/>
                   <Route path={'/messages/*'} element={<Messages/>}/>
                   <Route path={'/news'} element={<News/>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
