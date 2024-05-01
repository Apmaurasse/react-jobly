import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'


const RootLayout= () => {
  return (
    <div>
        
        <header>
        <NavBar />
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
};


export default RootLayout