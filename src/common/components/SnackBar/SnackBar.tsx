import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "app/store";
import {setErrorAC} from "app/appReducer";

// type PropsType = {
//     error: string | null
// }

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = () => {

    const errorMessage = useSelector<AppRootStateType, string | null>(state => state.app.error)
    const dispatch = useAppDispatch()

    const [open, setOpen] = React.useState(false);


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorAC(null))
    };

    return (
        <Snackbar open={!!errorMessage} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {errorMessage}
            </Alert>
        </Snackbar>
    );
}