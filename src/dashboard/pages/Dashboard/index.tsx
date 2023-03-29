import SlideRoutes from 'react-slide-routes';
import { Route, useLocation } from 'react-router-dom';
// import './style.scss';
import { Login } from '../Login';
import { ControlPanel } from '../ControlPanel';

export const Dashboard = () => {

    const location = useLocation()
    
    return (
        <>
        <SlideRoutes duration={1000}>
            <Route index element={<ControlPanel />} />
            <Route path='/login' element={<Login />} />
        </SlideRoutes>
        </>
    )
}