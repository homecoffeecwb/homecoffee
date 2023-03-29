import './sass/App.scss';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Login } from './dashboard/pages/Login';
import { useMuiTheme } from './hooks/useMuiTheme';
import { ThemeProvider } from '@mui/material';

const App = () => {
    const muiTheme = useMuiTheme()

    return (
        <ThemeProvider theme={muiTheme}>

            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    )
}

export default App