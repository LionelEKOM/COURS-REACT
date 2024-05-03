import React, { useEffect, useState } from 'react'
import './Card.css'

export default function Card() {

    const[state, setState] = useState(0)

    useEffect(() => {
      console.log("Effet")
      return () => console.log("Mise a jour...");
    })
  return (
    <div className='card'>
      <p>Voici le card et son state : {state}</p>
      <button onClick={() => setState(state + 1)}>Incrementation</button>
    </div>
  )
}
