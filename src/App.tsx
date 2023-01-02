import React, {useCallback} from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Messages} from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {StateType} from "./redux/store-redux";
import {AppRootStateType} from "./redux/store-redux";
import {useSelector} from "react-redux";

type appType = {
    // state: StateType
    // dispatch: (action: GeneralACType) => void
}

function App() {

    const state = useSelector<AppRootStateType, StateType>(state => state)

    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path={'/profile/*'}
                           element={<Profile/>}/>
                    <Route path={'/messages/*'} element={<Messages/>}/>
                    <Route path={'/news'} element={<News/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
