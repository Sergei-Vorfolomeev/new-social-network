import React from 'react';
import 'app/App.module.scss';
import {Route, Routes} from "react-router-dom";
import {News} from "features/components/News/News";
import {MessagesContainer} from "features/components/Messages/MessagesContainer";
import {UsersContainer} from "features/components/Users/UsersContainer";
import {ProfileContainer, withRouter} from "features/components/Profile/ProfileContainer";
import {Login} from "features/components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "./store";
import {Preloader} from "features/components/common/Preloader/Preloader";
import {initializeAppTC} from "./appReducer";
import styles from './App.module.scss'
import {UsersRecommends} from "features/components/UsersRecommends/UsersRecommends";
import {NewsBar} from "features/components/NewsBar/NewsBar";
import {NavBar} from "features/components/NavBar/NavBar";
import {SnackBar} from "common/components/SnackBar/SnackBar";


export class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.isInitialized) return <Preloader/>
        console.log(this.props.error)

        return (
            <div className={styles.appWrapper}>
                {/*<HeaderContainer/>*/}
                <NavBar/>
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
                <div>
                    <Routes>
                        <Route path={'/*'} element={<UsersRecommends/>}/>
                        <Route path={'/users'} element={<NewsBar/>}/>
                    </Routes>
                </div>
                {/*{this.props.error && */}
                    <SnackBar />
                {/*}*/}
            </div>
        );
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
