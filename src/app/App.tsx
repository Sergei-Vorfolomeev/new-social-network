import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {News} from "../components/News/News";
import {MessagesContainer} from "../components/Messages/MessagesContainer";
import {NavBarContainer} from "../components/NavBar/NavBarContainer";
import {UsersContainer} from "../components/Users/UsersContainer";
import {ProfileContainer, withRouter} from "../components/Profile/ProfileContainer";
import {HeaderContainer} from "../components/Header/HeaderContainer";
import {Login} from "../components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "./store";
import {Preloader} from "../components/common/Preloader/Preloader";
import {initializeAppTC} from "./appReducer";


export class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.isInitialized) return <Preloader/>

        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className="appWrapperContent">
                    <Routes>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/'} element={<Login/>}/>
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
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    initializeApp: initializeAppTC
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)
