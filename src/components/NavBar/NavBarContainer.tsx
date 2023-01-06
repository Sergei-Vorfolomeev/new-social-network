import React from 'react';

import {connect} from "react-redux";
import {NavBar} from "./NavBar";
import {AppRootStateType, NavBarType} from "../../redux/store-redux";
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
