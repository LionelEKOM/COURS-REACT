import React, { useState } from 'react'
import hamburger from './assets/hamburger.svg'
import close from './assets/close.svg'
export default function Navbar() {

    const [showMenu, setShowMenu] = useState(true)
  return (
    <nav className="fixed top-0 w-full justify-center p-4 bg-slate-200">
        <ul className={`${showMenu ? "flex" : "hidden"} flex-col items-center bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0`}>
            <li><a className='inline-block py-2 mx-4 text-lg sm:py-0' href="#">Accueil</a></li>
            <li><a className='inline-block py-2 mx-4 text-lg sm:py-0' href="#">Service</a></li>
            <li><a className='inline-block py-2 mx-4 text-lg sm:py-0' href="#">Contact</a></li>
            <li><a className='inline-block py-2 mx-4 text-lg sm:py-0' href="#">A propos</a></li>
        </ul>
        <button className='sm:hidden ml-auto' onClick={() => setShowMenu(!showMenu)}>
            <img className='w-5' src={showMenu ? close : hamburger} alt="Menu" />
        </button>
    </nav>
  )
}
