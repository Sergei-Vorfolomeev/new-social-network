import React from 'react';
import 'app/App.module.scss';
import {Route, Routes} from "react-router-dom";
import {MessagesContainer} from "features/components/Messages/MessagesContainer";
import {UsersContainer} from "features/components/Users/UsersContainer";
import {ProfileContainer, withRouter} from "features/components/Profile/MyProfile/ProfileContainer";
import {Login} from "features/components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "./store";
import {initializeAppTC} from "./appReducer";
import styles from './App.module.scss'
import {UsersRecommends} from "features/components/UsersRecommends/UsersRecommends";
import {NewsBar} from "features/components/NewsBar/NewsBar";
import {NavBar} from "features/components/NavBar/NavBar";
import {SnackBar} from "common/components/SnackBar/SnackBar";
import {UserProfile} from "features/components/Profile/UserProfile/userProfile";
import Feed from "features/components/Feed/Feed";
import {Loader} from "common/components/Loader/Loader";
import {Weather} from "features/components/Weather/Weather";


export class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.isInitialized) return <Loader/>
        console.log(this.props.error)

        return (
            <div className={styles.appWrapper}>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Routes>
                        <Route path={'/feed'} element={<Feed/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/'} element={<Login/>}/>
                        <Route path={'/profile'} element={<ProfileContainer/>}/>
                        <Route path={'/userProfile/:userId'} element={<UserProfile/>}/>
                        <Route path={'/users/*'} element={<UsersContainer/>}/>
                        <Route path={'/messages/*'} element={<MessagesContainer/>}/>
                        <Route path={'/weather'} element={<Weather/>}/>
                    </Routes>
                </div>
                <div>
                    <Routes>
                        <Route path={'/*'} element={<UsersRecommends/>}/>
                        <Route path={'/users'} element={<NewsBar/>}/>
                        <Route path={'/login'} element={<div></div>}/>
                    </Routes>
                </div>
                    <SnackBar />
            </div>
        )
    }
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isInitialized: boolean
    error: string | null
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized,
        error: state.app.error
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    initializeApp: initializeAppTC
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)
