import React from 'react';
import { Button } from '@mui/material';
import { useUser } from '../../../hooks/useUser';
import { useHeader } from '../../../hooks/useHeader';

export const Header = () => {
    const {user, setUser} = useUser()
    const header = useHeader()
    
    return (
        <div className="header">
            <h3 className='title'>{header.title}</h3>
            <Button onClick={() => setUser(null)} variant='outlined' >Sair</Button>
        </div>
    )
}