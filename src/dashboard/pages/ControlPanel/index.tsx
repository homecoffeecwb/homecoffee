import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react'
import { Route } from 'react-router-dom';
import ReactSlideRoutes from 'react-slide-routes';
import SnackbarContext from '../../contexts/snackbarContext';
import { NewProduct } from './NewProduct';
import { ProductList } from './ProductList';
import './style.scss';
import { Header } from './Header';
import { Categories } from './Categories';

export const ControlPanel = () => {
    const snackbar = useContext(SnackbarContext)

    useEffect(() => {
        document.title = 'Home Coffee - Dashboard'
        
    }, [])
    
    return (
        <div className='ControlPanel-Page' >
            <Header />
            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => snackbar.setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={() => snackbar.setOpen(false)} severity={snackbar.severity} sx={{ width: '100%' }}>
                {snackbar.text}
                </Alert>
            </Snackbar>
            <ReactSlideRoutes duration={1000}>
                <Route index element={<ProductList />} />
                <Route path='/novo' element={<NewProduct />} />
                <Route path='/categorias' element={<Categories />} />
            </ReactSlideRoutes>
        </div>
    )
}