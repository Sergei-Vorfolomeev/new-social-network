import {Profile} from "./Profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType, ProfileResponseType} from "../../store/store";
import {setProfileUser} from "../../store/profilePageReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {toggleIsFetching} from "../../store/UsersPageReducer";

class ProfileAPIContainerClass extends React.Component<ProfilePropsType, ProfileResponseType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        const userId = this.props.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfileUser(response.data)
                this.props.toggleIsFetching(false)
            })
        // console.log(this.props)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching}/>
    }
}

// TYPES
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterProps
type MapStateToPropsType = {
    profile: null | ProfileResponseType
    isFetching: boolean
}
type MapDispatchToPropsType = {
    setProfileUser: (profile: ProfileResponseType) => void
    toggleIsFetching: (value: boolean) => void
}
export type WithRouterProps = {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    setProfileUser,
    toggleIsFetching
}

// WITH ROUTER
export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};

// WRAPPING
export const ProfileContainer = compose<React.FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileAPIContainerClass)


