import React from 'react'
import NavBar from './NavBar';
import {Outlet} from 'react-router-dom'
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <NavBar />

      


    {props.children}
    <Outlet />
    <hr />
    <Footer />
    </>

  )
}

export default Layout