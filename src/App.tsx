import './sass/App.scss';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Login } from './dashboard/pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App