import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const logout = ()=>{
        localStorage.clear();
    }

    return(
        <div>
            <ul className="nav-ui">
                <li><Link to="/"></Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/my-account">My Account</Link></li>
                <li><Link to="/leave-apply">Leave Apply</Link></li>
                <li>{auth ? <Link onClick={logout} to="/login">Logout</Link>
                : <li><Link to="/login">Login</Link></li> }
                </li>
            </ul>
        </div>
    )
}
export default Nav;