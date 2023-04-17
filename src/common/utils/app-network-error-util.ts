import {ErrorType} from "app/store";
import {Dispatch} from "redux";
import {setErrorAC} from "app/appReducer";
import axios, {AxiosError} from "axios";
import {toggleIsFetching} from "features/Users/UsersPageReducer";

export const appNetworkErrorUtil = (e: unknown, dispatch: Dispatch) => {
    const err = e as Error | AxiosError<ErrorType>
   if (axios.isAxiosError<ErrorType>(err)) {
       const error = err.response?.data ? err.response.data.message : err.message
       dispatch(setErrorAC(error))
   } else {
       dispatch(setErrorAC(`Native error: ${err.message}`))
   }
    dispatch(toggleIsFetching(false))
}