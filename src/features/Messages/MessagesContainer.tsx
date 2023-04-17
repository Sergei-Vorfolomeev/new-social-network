import React from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {Messages} from "features/Messages/Messages";
import {ToAuthRedirect} from "hoc/ToAuthRedirect";
import {AppRootStateType, MessagePageType} from "app/store";
import {sendMessageAC} from "features/Messages/messagePageReducer";

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



