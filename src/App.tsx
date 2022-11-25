import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="appWrapper">
            <BrowserRouter>
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">
                <Routes>
                   <Route path={'/profile'} element={<Profile/>}/>
                   <Route path={'/dialogs'} element={<Dialogs/>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
