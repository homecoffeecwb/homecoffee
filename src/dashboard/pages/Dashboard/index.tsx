import React from 'react'
import SlideRoutes from 'react-slide-routes';
import { Route, useLocation } from 'react-router-dom';
// import './style.scss';
import { Login } from '../Login';
import { ControlPanel } from '../ControlPanel';
import { UserProvider } from '../../contexts/userContext';

export const Dashboard = () => {

    const location = useLocation()
    
    return (
        <>
        <UserProvider>

            <SlideRoutes duration={1000}>
                <Route index element={<ControlPanel />} />
                <Route path='/login' element={<Login />} />
                <Route path='/panel/*' element={<ControlPanel />} />
            </SlideRoutes>
            
        </UserProvider>
        </>
    )
}