

import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";



const Private = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem("user")) || {
    name: false,
    isAuth: false,
    token: false,
  };
  const location = useLocation()
  console.log('location',location.pathname)

  const [user, setUser] = useState(localUser);;
  const { isAuth, name, token } = user;
  
  console.log(isAuth)

  if (!isAuth && location.pathname=='/admin') {
    return <Navigate to='/adminPage' />
  }

  if (!isAuth) {
    return <Navigate to='/login' />
  }

  return <>{children}</>;
};

export default Private;
