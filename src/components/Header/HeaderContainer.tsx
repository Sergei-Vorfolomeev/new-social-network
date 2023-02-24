import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {AuthMeResponseType, DataAuthMeResponseType, setUserData} from "../../store/authReducer";
import {authAPI} from "../../api/api";

class HeaderAPIContainerClass extends React.Component<HeaderPropsType, AuthMeResponseType> {

    componentDidMount() {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
                } else {
                    alert(data.messages[0])
                }
            })
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

}

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {}
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserData
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainerClass)