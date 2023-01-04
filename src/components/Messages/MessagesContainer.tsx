import React from 'react';
import {sendMessageAC} from "../../redux/messagePageReducer";
import {connect} from "react-redux";
import {AppRootStateType, MessagePageType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {Messages} from "./Messages";

type mapStateToPropsType = {
    messagePage: MessagePageType
}
type mapDispatchToPropsType = {
    sendMessageHandler: (newMessage: string) => void
}
export type MessagesPagePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessageHandler: (newMessage: string) => {
                dispatch(sendMessageAC(newMessage))
            }
        }
    }

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)



