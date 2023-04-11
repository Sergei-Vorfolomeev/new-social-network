import React from 'react';

import {connect} from "react-redux";
import {NavBar} from "features/components/NavBar/NavBar";
import {AppRootStateType, NavBarType} from "app/store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    navBar: NavBarType
};
type mapDispatchToPropsType = any;
export type NavBarPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        navBar: state.navBar
    }
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {}
};

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
