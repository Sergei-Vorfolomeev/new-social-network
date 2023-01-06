import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppRootStateType, ProfilePageType} from "../../../store/store";
import {Dispatch} from "redux";
import {addPostAC} from "../../../store/profilePageReducer";

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profilePage: ProfilePageType
}
type mapDispatchToPropsType = {
    addPost: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

