import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {AuthMeResponseType, DataAuthMeResponseType, setUserData} from "../../store/authReducer";
import axios from "axios";

class HeaderAPIContainerClass extends React.Component<HeaderPropsType, AuthMeResponseType> {

    componentDidMount() {
        axios.get<AuthMeResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                } else {
                    alert(response.data.messages[0])
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