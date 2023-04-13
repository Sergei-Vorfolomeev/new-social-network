import {Dispatch} from "redux";
import {setErrorAC} from "app/appReducer";
import axios, {AxiosError} from "axios";
import {ResponseType} from "app/store";

export const appServerErrorUtil = (data: ResponseType, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
}