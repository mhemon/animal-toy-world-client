import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if(user){
        return children
    }

    if(loading){
        return <progress className="progress progress-primary w-56" value="0" max="100"></progress>
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;