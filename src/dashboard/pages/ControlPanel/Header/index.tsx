import React from 'react';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useUser } from '../../../hooks/useUser';
import { useHeader } from '../../../hooks/useHeader';
import SettingsIcon from '@mui/icons-material/Settings';
import { useColors } from '../../../../hooks/useColors';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Header = () => {
    const {user, setUser} = useUser()
    const header = useHeader()
    const colors = useColors()
    const navigate = useNavigate()
    const location = useLocation()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className="header">
            { location.pathname != '/dashboard/panel' && <IconButton color='primary' onClick={() => navigate(-1)}>
                <ArrowBackIcon />
            </IconButton> }
            <h3 className='title'>{header.title}</h3>
            <div className='header-buttons'>
                <IconButton color='primary' onClick={handleClick}>
                    <SettingsIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: colors.background_dark,
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => navigate('/dashboard/panel/categorias')} sx={{gap: '3vw'}}>
                        <CoffeeIcon /> Categorias
                    </MenuItem>
                </Menu>
                <Button onClick={() => setUser(null)} variant='outlined' >Sair</Button>
            </div>
        </div>
    )
}