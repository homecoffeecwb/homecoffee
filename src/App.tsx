import './sass/App.scss';
import './sass/mui.scss';
import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { useMuiTheme } from './hooks/useMuiTheme';
import { ThemeProvider } from '@mui/material';
import { Dashboard } from './dashboard/pages/Dashboard';

const App = () => {
    const muiTheme = useMuiTheme()

    return (
        <ThemeProvider theme={muiTheme}>

            <BrowserRouter>
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path='/dashboard/*' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    )
}

export default App