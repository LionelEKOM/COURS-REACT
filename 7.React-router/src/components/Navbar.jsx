import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='p-2 text-center bg-slate-300'>
      <Link to="/" className='mx-2 text-md text-semibold'>
        Home
      </Link>
      <NavLink to="/about" className={({isActive}) => `${isActive && "bg-amber-400"} mx-2 text-md text-semibold`}>
        About
      </NavLink>
      <Link to="/contact" className='mx-2 text-md text-semibold'>
        Contact
      </Link>
    </nav>
  )
}
