import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='border-neutral-500 border-b pb-3 pt-3'>
        
        <div className='flex items-center justify-around'>
      <Link to='/' className='text-2xl '>Instagram</Link>
      <div className='flex gap-3'>
        <Link to='/requests' className='text-xl p-1  rounded-md border bg-black text-white'>Requests</Link>
        <Link to='/about'className="text-xl p-1  rounded-md border bg-black text-white ">About Us</Link>
        <Link to='/home' className='text-xl p-1 rounded-md border bg-black text-white'>Home</Link>
      </div>
        </div>
    </div>
  )
}

export default NavBar