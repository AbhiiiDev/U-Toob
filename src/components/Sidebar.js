import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

if(!isMenuOpen) return null;

  return (
    <div className='border shadow-md w-52'>
      <ul className='m-2'>
        <Link to='/'><li className='font-bold m-2'>Home</li> </Link>
        <li className='m-2'>Shorts</li>
        <li className='m-2'>Subscriptions</li>
      </ul>
      <ul className='m-2'>
        <li className='font-bold m-2'>You</li>
        <li className='m-2'>History</li>
        <li className='m-2'>Watch Later</li>
      </ul>
      <ul className='m-2'>
        <li className='font-bold m-2'>Trending</li>
        <li className='m-2'>Shopping</li>
        <li className='m-2'>Music</li>
      </ul>

    </div>
  )
}

export default Sidebar