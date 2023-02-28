import {Profile} from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {AppRootStateType, ProfileResponseType} from "../../store/store";
import {getProfile, getStatus, setProfileUser} from "../../store/profilePageReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {toggleIsFetching} from "../../store/UsersPageReducer";
import {ToAuthRedirect} from "../../HOC/ToAuthRedirect";

class ProfileAPIContainerClass extends React.Component<ProfilePropsType, ProfileResponseType> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) userId = '2'
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        isFetching={this.props.isFetching}
                        status={this.props.status}/>
    }
}

// TYPES
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterProps
type MapStateToPropsType = {
    profile: null | ProfileResponseType
    isFetching: boolean
    status: string
}
type MapDispatchToPropsType = {
    setProfileUser: (profile: ProfileResponseType) => void
    toggleIsFetching: (value: boolean) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
}
type WithRouterProps = {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.usersPage.isFetching,
        status: state.profilePage.status
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    setProfileUser,
    toggleIsFetching,
    getProfile,
    getStatus
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
export const ProfileContainer = compose<React.ComponentType>(
    ToAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileAPIContainerClass)


