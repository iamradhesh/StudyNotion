import React from 'react'
import { Navigate, useNavigate } from 'react-router';

const PrivateRoute = ({isLoggedIn,children}) => {
  
   if(isLoggedIn)
   {
    return children;
   }
   else{
           return <Navigate to="/login"/>
   }
}

export default PrivateRoute
