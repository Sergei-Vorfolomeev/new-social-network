import React from 'react';
import {sendMessageAC} from "../../store/messagePageReducer";
import {connect} from "react-redux";
import {AppRootStateType, MessagePageType} from "../../store/store";
import {compose, Dispatch} from "redux";
import {Messages} from "./Messages";
import {ToAuthRedirect} from "../../HOC/ToAuthRedirect";


// TYPES
type mapStateToPropsType = {
    messagePage: MessagePageType
    // isAuth: boolean
}
type mapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}
export type MessagesPagePropsType = mapStateToPropsType & mapDispatchToPropsType

// MSTP / MDTP
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage,
        // isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessage: string) => {
                dispatch(sendMessageAC(newMessage))
            }
        }
    }

export const MessagesContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    ToAuthRedirect
)(Messages)



