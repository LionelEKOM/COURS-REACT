import { useRef, useState } from "react"
import "./Container.css"

export default function Container() {

  const [state, setState] = useState("")
  function handleInput(e) {
    setState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  console.log(emaiRef.current.value)
  }
  const emaiRef = useRef()
  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form action="" onSubmit={handleSubmit}>
        <h2>###### Composants "controlled" #####</h2>
        <label htmlFor="pseudo">Votre pseudo : </label> 
        <input onChange={handleInput} value={state} placeholder="Ashuka" type="text" name="pseudo" id="pseudo" />
        {!state && <p>Veuillez renseigner ce champs !!</p>}
        <br />
        <br />
        <h2>###### Composants "uncontrolled" #####</h2>
        <label htmlFor="email">Votre email : </label>
        <input ref={emaiRef} placeholder="name@gmail.com" type="email" name="email" id="email" />
        <button>Envoyer</button>
      </form>
      <p>Votre pseudo : {state} </p>
    </div>
  )
}
