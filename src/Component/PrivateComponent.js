import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent=()=>{
    const auth = localStorage.getItem('user');
    console.log('ffff', auth.isAdmin)
    return auth && auth.isAdmin ? <Outlet />:<Navigate to ="/my-admin" />
}
export default PrivateComponent;