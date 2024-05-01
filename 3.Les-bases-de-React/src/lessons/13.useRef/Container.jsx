//useRef permet de selectionner des elements(p, label, input...)

import { useRef, useState } from "react"

export default function Container() {
  const [state, setSate] = useState(0)
  const countRef = useRef(0)

  console.log(countRef);
  const txtRef = useRef()
  console.log(txtRef.current)
  function handlecountRef() {
    countRef.current++
    console.log(countRef.current)
  }
  return (
    <div>
      <h1>Comprendre les refs</h1>
      <p>Valeur du countRef : {countRef.current}</p>
      <p>Valeur du state : {state}</p>
      <p ref={txtRef}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit est exercitationem maxime.</p>
      <button onClick={handlecountRef}>Incrementer la ref</button>
      <br />
      <button onClick={() => setSate(state + 1)}>StateADD</button>
    </div>
  )
}
