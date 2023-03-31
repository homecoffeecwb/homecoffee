import { AlertColor } from '@mui/material'
import { useContext } from 'react'
import SnackbarContext from '../contexts/snackbarContext'

interface OpenSnackbar {
    text: string
    severity: AlertColor
}

export const useSnackbar = () => {
    const snackbarContext = useContext(SnackbarContext);

    const snackbar = (options:OpenSnackbar) => {
        snackbarContext.setSeverity(options.severity)
        snackbarContext.setText(options.text)
        snackbarContext.setOpen(true)
    }

    return snackbar
}