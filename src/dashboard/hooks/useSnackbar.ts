import { useContext } from 'react'
import SnackbarContext from '../contexts/snackbarContext'

export const useSnackbar = () => {
    const snackbarContext = useContext(SnackbarContext);

    return snackbarContext
}