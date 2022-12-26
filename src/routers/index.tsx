import { useRoutes } from 'react-router-dom'
import React from 'react'
import Task from 'components/Task/Task'
import Login from 'components/Login/Login'
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";
import {Outlet, Navigate} from 'react-router-dom'
const Routers = () => {
    const state = useSelector(selectAuth)
    console.log(state)
    const ProtectedRoute = () => {
        // const { isAuthenticated  } = useAppSelector(selectAuth);  
        return <Outlet />;
        // return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />;
    };
    const RejectedRoute = () => { 
        return !state.isAuthenticated ? <Outlet /> : <Navigate to = '/task' />;
    }
    const elements = useRoutes([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "",
        element: <ProtectedRoute />,
        children: [
          {
            path: '/task',
            element: <Task />,
          },
        ],
      },
      {
        path: "",
        element: <RejectedRoute />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
        ],
      },
    ]);
    
      return elements;
}

export default Routers
    