import { DialogTitle, useMediaQuery } from '@mui/material';
import { DialogActions } from '@mui/material';
import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import React from 'react';
import { useColors } from '../../../../../../hooks/useColors';

interface DeleteConfirmProps {
    open: boolean
    setOpen: (value:boolean) => void
    confirm: (value:boolean) => void
}

export const DeleteConfirm:React.FC<DeleteConfirmProps> = ({ open, setOpen, confirm }) => {
    const colors = useColors()
    const isMobile = useMediaQuery('(orientation: portrait)')

    const confirmDeletion = () => {
        confirm(true)
        setOpen(false)
    }
    
    return (
        <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{style:{width: '100%', backgroundColor: colors.background}}}
            // disableEscapeKeyDown={true}
            // hideBackdrop={true}
            
        >
            <DialogTitle>Deletar produto?</DialogTitle>
            <DialogActions sx={{justifyContent: 'space-evenly', marginBottom: isMobile ? '5vw' : '1vw'}}>
                <Button variant='outlined' onClick={() => setOpen(false)} >Cancelar</Button>
                <Button variant='contained' color='error' onClick={() => confirmDeletion()} >Deletar</Button>
            </DialogActions>
        </Dialog>
    )
}