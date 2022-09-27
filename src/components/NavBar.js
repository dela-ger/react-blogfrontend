import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "../css/style.css";

function NavBar() {
  return (
    <nav>
        <h2><NavLink>Kob's Blog</NavLink></h2>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar