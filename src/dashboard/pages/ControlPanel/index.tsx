import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom';
import ReactSlideRoutes from 'react-slide-routes';
import SnackbarContext from '../../contexts/snackbarContext';
import { useSnackbar } from '../../hooks/useSnackbar';
import { useUser } from '../../hooks/useUser';
import { NewProduct } from './NewProduct';
import { ProductList } from './ProductList';
import './style.scss';

export const ControlPanel = () => {
    const {user, setUser} = useUser()
    const navigate = useNavigate()
    const snackbar = useContext(SnackbarContext)

    useEffect(() => {
        document.title = 'Home Coffee - Dashboard'
    }, [])
    
    return (
        <div className='ControlPanel-Page' >
            <div className="header">
                <h3 className='title'>Painel de controle</h3>
                <Button onClick={() => setUser(null)} variant='outlined' >Sair</Button>
            </div>
            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => snackbar.setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={() => snackbar.setOpen(false)} severity={snackbar.severity} sx={{ width: '100%' }}>
                {snackbar.text}
                </Alert>
            </Snackbar>
            <ReactSlideRoutes duration={1000}>
                <Route index element={<ProductList />} />
                <Route path='/novo' element={<NewProduct />} />
            </ReactSlideRoutes>
        </div>
    )
}