import React, { useEffect, useState } from 'react'
import './CountryBox.css';
import axios from 'axios';
import CountryCard from '../CountryCard/CountryCard';
import { useNavigate } from 'react-router-dom';

function CountryBox() {
  const [cData, setCData] = useState([])
  const navigate=useNavigate()
  useEffect(()=>{
  getData()
  },[])
  const getData = () => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      console.log(res);
      setCData(res.data)
    })
      .catch((err)=>{
        navigate('/')

      })
    
  }
  return (
    <div className='Country-Box'>
     {cData.map((country,index)=><CountryCard country={country} key={index}/>)}
    </div>
  )
}

export default CountryBox