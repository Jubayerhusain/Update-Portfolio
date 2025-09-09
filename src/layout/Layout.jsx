import React from 'react'
import Home from '../pages/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
    return (
        <div className='max-w-[1440px] mx-auto h-screen'>
            <Navbar></Navbar>
            <Outlet />
        </div>
    )
}

export default Layout
