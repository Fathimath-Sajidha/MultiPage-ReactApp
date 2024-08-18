import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home'>
       <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Our Website</h1>
          <p className="hero-subtitle">Discover the Beauty of Simplicity
            <br></br>
          </p>
        <div className='div-btn'> <Link to={'/todo'}> <button  className='cta-button'>TodoList</button></Link>
        
        <Link to={'/country'}> <button className='cta-button' > Countries</button></Link>
        </div>
        </div>
      </section>

        
    </div>
  )
}

export default Home
