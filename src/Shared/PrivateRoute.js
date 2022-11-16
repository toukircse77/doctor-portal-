import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className='h-[80vh] flex items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div>
    }
    if(user){
        return children
    }
    
    return <Navigate to='/login' state={{ from: location }} replace />;
  
};

export default PrivateRoute;