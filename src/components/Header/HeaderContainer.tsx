import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {AuthMeResponseType, DataAuthMeResponseType, meTC, setUserData} from "../../store/authReducer";

class HeaderAPIContainerClass extends React.Component<HeaderPropsType, AuthMeResponseType> {

    componentDidMount() {
        this.props.me()
    }

    render() {
        return (
            <Header/>
        );
    }
};

//TYPES

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {}
type MapDispatchToPropsType = {
    setUserData: (data: DataAuthMeResponseType) => void
    me: () => void
}

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {}
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserData,
    me: meTC
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainerClass)