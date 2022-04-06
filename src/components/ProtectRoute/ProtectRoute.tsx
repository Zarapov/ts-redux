import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProtectRoute:React.FC = () => {
    const location = useLocation();
    const {isLoggedIn,user} = useTypedSelector(store => store.auth);
    if(isLoggedIn&&user?.accessToken){
        return <Outlet/>
    }
    return <Navigate to="/auth" state={{from:location.pathname}} replace/>
    
}
export default ProtectRoute;