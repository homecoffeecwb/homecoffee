import React from 'react'
import SlideRoutes from 'react-slide-routes';
import { Route, useLocation } from 'react-router-dom';
// import './style.scss';
import { Login } from '../Login';
import { ControlPanel } from '../ControlPanel';
import { UserProvider } from '../../contexts/userContext';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { SnackbarProvider } from '../../contexts/snackbarContext';
import { HeaderProvider } from '../../contexts/headerContext';

export const Dashboard = () => {

    return (
        <>
        <UserProvider>
            <SnackbarProvider>
                <HeaderProvider>

                    <SlideRoutes duration={1000}>
                        <Route index element={<ControlPanel />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/panel/*' element={<ControlPanel />} />
                    </SlideRoutes>

                </HeaderProvider>
            </SnackbarProvider>
        </UserProvider>
        </>
    )
}