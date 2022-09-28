import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "../css/style.css";
import bars from "../Assets/bars-solid.svg";
import xmark from "../Assets/xmark-solid.svg";

function NavBar() {
  return (
    <nav>
        
        <h2 ><NavLink className='nav-logo'>Kob's Blog</NavLink></h2>
        <img src={bars} alt="humburger menu" className='menu-bar' />
        <ul className='nav-list'>
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