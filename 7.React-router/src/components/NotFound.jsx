import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center pt-10">
        404 - Page Not Found 
      </h1>
      <div className="text-center">
        {/* <a href="/">Retour a l'accueil.</a> */}
        <Link to="/" >
        Retour a l'accueil.
        </Link>
      </div>
    </div>
  )
}
