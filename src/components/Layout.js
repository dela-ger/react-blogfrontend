import React from 'react'
import NavBar from './NavBar';
import {Outlet} from 'react-router-dom'

function Layout(props) {
  return (
    <>
        <NavBar />

    {props.children}
    <Outlet />
    </>

  )
}

export default Layout