import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <Link to={'/todo'}> <Button  className='button-62'>TodoList</Button></Link>
        
        <Link to={'/country'}> <Button className='button-62' > Countries</Button></Link>
        
    </div>
  )
}

export default Home
