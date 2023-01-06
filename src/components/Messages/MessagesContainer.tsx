import React from 'react';
import {sendMessageAC} from "../../store/messagePageReducer";
import {connect} from "react-redux";
import {AppRootStateType, MessagePageType} from "../../store/store";
import {Dispatch} from "redux";
import {Messages} from "./Messages";

type mapStateToPropsType = {
    messagePage: MessagePageType
}
type mapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}
export type MessagesPagePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessage: string) => {
                dispatch(sendMessageAC(newMessage))
            }
        }
    }

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)



