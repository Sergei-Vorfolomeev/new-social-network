import React from 'react';
import {Header} from "features/components/Header/Header";
import {connect} from "react-redux";
import {AppRootStateType} from "app/store";
import {AuthMeResponseType, DataAuthMeResponseType, logoutTC, meTC, setUserData} from "store/authReducer";


//TYPES

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setUserData: (data: DataAuthMeResponseType) => void
    me: () => void
    logout: () => void
}

class HeaderAPIContainerClass extends React.Component<HeaderPropsType, AuthMeResponseType> {

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}
            />
        );
    }
}


// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserData,
    me: meTC,
    logout: logoutTC
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainerClass)