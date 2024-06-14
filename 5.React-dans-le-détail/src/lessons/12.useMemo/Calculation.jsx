import React, { useState } from 'react'

export default function Calculation() {

  const[temperature, setTemperature] = useState("")
  function celsius(degree) {
    return degree ? degree * 1.8 + 32 : "Veuillez entrer une valeur"
  }

  const expensiveCalcul = celsius(temperature)
  return (
    <div>
      <input type="number" name="chiffre" id="" 
      value={temperature}
      onChange={(e) => setTemperature(e.target.value)}
      />
      <h1>Temperature equivaut a {expensiveCalcul}</h1>
    </div>
  )
}
