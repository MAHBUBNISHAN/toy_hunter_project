import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user?.accessToken) return <Navigate to="/login" state={{ from: location }} replace />;
    
    return children
}

export default RequireAuth
