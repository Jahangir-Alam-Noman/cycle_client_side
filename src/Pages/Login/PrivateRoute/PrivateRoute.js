import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth();
return (
    user.email ? <Outlet/> : <Navigate to='/login'/>
    ) 
}
export default PrivateRoute;