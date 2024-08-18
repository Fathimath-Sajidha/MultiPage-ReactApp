import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Rootlaout.css'

function Rootlayout() {
  return (
    
    <div className='wrapper'>
        <Navbar/>
        <main className='main'>
  <Outlet/>
        </main>
       
        <Footer/>
    </div>
    
    
  )
}

export default Rootlayout