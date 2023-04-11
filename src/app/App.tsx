import React from 'react';
import 'app/App.module.scss';
import {Route, Routes} from "react-router-dom";
import {News} from "features/components/News/News";
import {MessagesContainer} from "features/components/Messages/MessagesContainer";
import {NavBarContainer} from "features/components/NavBar/NavBarContainer";
import {UsersContainer} from "features/components/Users/UsersContainer";
import {ProfileContainer, withRouter} from "features/components/Profile/ProfileContainer";
import {HeaderContainer} from "features/components/Header/HeaderContainer";
import {Login} from "features/components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "./store";
import {Preloader} from "features/components/common/Preloader/Preloader";
import {initializeAppTC} from "./appReducer";
import styles from './App.module.scss'
import {Recommends} from "features/components/recommends/Recommends";


export class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.isInitialized) return <Preloader/>

        return (
            <div className={styles.appWrapper}>
                {/*<HeaderContainer/>*/}
                <NavBarContainer/>
                <div className={styles.appWrapperContent}>
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
                <Recommends/>
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
