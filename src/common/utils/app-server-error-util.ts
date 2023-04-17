import {Dispatch} from "redux";
import {setErrorAC} from "app/appReducer";
import {ResponseType} from "app/store";
import {toggleIsFetching} from "features/Users/UsersPageReducer";

export const appServerErrorUtil = (data: ResponseType, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(toggleIsFetching(false))

}