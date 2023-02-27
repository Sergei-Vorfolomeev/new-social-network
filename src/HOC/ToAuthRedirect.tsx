import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../store/store";
import {Navigate} from "react-router-dom";

export function ToAuthRedirect<T>(Component: React.ComponentType<T>) {
    type MapStateToPropsType = {
        isAuth: boolean
    }

    const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps)( (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as JSX.IntrinsicAttributes & T}/>
    })
};
