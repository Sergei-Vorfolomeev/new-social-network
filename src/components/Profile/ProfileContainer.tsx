import {Profile} from "./Profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {AppRootStateType, ProfileResponseType} from "../../store/store";
import {setProfileUser} from "../../store/profilePageReducer";

class ProfileAPIContainerClass extends React.Component<ProfilePropsType, ProfileResponseType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => this.props.setProfileUser(response.data))
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: null | ProfileResponseType
}
type MapDispatchToPropsType = {
    setProfileUser: (profile: ProfileResponseType) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = {
    setProfileUser
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainerClass)


