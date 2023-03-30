import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom';
import ReactSlideRoutes from 'react-slide-routes';
import { useUser } from '../../hooks/useUser';
import { ProductList } from './ProductList';
import './style.scss';

export const ControlPanel = () => {
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        
    }, [])
    
    return (
        <div className='ControlPanel-Page' >
            <div className="header">
                <Button onClick={() => setUser(null)} variant='outlined' >Sair</Button>
            </div>
            <ReactSlideRoutes duration={1000}>
                <Route index element={<ProductList />} />
            </ReactSlideRoutes>
        </div>
    )
}