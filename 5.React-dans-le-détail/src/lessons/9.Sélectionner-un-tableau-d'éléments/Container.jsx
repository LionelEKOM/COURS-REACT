import { useRef } from "react"

export default function Container() {

  const inputsRef = useRef([])

  function addInputRef(el) {
    if(el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el)
    }
    console.log(inputsRef);
  }
  return (
    <div>
      <h1>Sélectionner un tableau d'éléments</h1>
        <input ref={addInputRef} type="text" name="" id="" />
        <input ref={addInputRef} type="text" name="" id="" />
        <input ref={addInputRef} type="text" name="" id="" />
    </div>
  )
}
