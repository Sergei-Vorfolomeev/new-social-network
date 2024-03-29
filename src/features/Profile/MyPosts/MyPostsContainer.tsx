import {connect} from "react-redux";
import {MyPosts} from "features/Profile/MyPosts/MyPosts";
import {AppRootStateType} from "app/store";
import {Dispatch} from "redux";
import {addPostAC, ProfilePageType} from "features/Profile/profilePageReducer";

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

