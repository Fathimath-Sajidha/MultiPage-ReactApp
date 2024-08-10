import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Rootlayout() {
  return (
    <div className='Wrapper'>
        <Navbar/>
        <main>
  <Outlet/>
        </main>
        <Footer/>

    </div>
  )
}

export default Rootlayout