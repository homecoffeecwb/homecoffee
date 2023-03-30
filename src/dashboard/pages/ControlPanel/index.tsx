import React from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import './style.scss';

export const ControlPanel = () => {
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) navigate('/dashboard/login')
    }, [])
    
    return (
        <div className='ControlPanel-Page' >
            
        </div>
    )
}