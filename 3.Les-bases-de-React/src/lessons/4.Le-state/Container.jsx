import { useState } from "react"

export default function Container() {
  const [countState, setCountState] = useState(0)
  const[greetState, setGreetState] = useState("Hello Dev Ashuka")

  function handleClick() {
    setCountState(countState + 1)
  }
  const decrement = () => {
    setCountState(countState - 1)
  }
  return (
    <div>
      <h1>Le state</h1>
      <h2>{greetState}, How about you ?</h2>
      <br />
      <p>Tap on buttons for change state of count !!</p>
      <p>{countState}</p>
      <button onClick={handleClick}>Incrementer++</button>
      <br />
      <button onClick={decrement}>Decrementer--</button>
    </div>
  )
}
