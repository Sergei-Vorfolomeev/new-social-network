import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Messages} from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {StateType} from "./redux/state";

type appType = {
    state: StateType
    addPost: (textPost: string) => void
}

function App (props:appType) {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar navBar={props.state.navBar}/>
            <div className="appWrapperContent">
                <Routes>
                   <Route path={'/profile/*'}
                          element={<Profile profilePage={props.state.profilePage}
                                            addPost={(textPost:string)=>props.addPost(textPost)}
                   />}/>
                   <Route path={'/messages/*'} element={<Messages messagePage={props.state.messagePage}/>}/>
                   <Route path={'/news'} element={<News/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
