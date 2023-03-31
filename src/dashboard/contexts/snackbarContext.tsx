import { createContext, useState } from 'react';
import React from 'react';
import { AlertColor } from '@mui/material';

export interface Snackbar {
    open: boolean
    setOpen: (open:boolean) => void
    text: string
    setText: (text:string) => void
    severity: AlertColor
    setSeverity: (severity:AlertColor) => void
}

interface SnackbarProviderProps {
    children: React.ReactNode
}

const SnackbarContext = createContext<Snackbar>({} as Snackbar);

export default SnackbarContext;

export const SnackbarProvider:React.FC<SnackbarProviderProps> = ({children}) => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [severity, setSeverity] = useState<AlertColor>('info')

    return (
        <SnackbarContext.Provider value={{open, setOpen, text, setText, severity, setSeverity}}>
                {children}
        </SnackbarContext.Provider>
    )
}