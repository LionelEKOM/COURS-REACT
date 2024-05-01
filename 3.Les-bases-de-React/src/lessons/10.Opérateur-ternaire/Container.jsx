import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false)
  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input 
        onClick={() => setValidation(!validation)}
        type="checkbox" />
        <p 
        className={`${validation ? "valid" : "invalid"}`}
        // style={{color: `${validation ? "lightgreen" : "red"}`}}
        >
          {validation ? "Bravo vous pouvez envoyer le formulaire":"Vous devez cocher la case !!"}
        </p>
      </form>
    </div>
  )
}
