import { useState } from "react"

export default function Container() {
  const [countState, setCountState] = useState(0)

  function handleClick() {
    setCountState(countState + 1)
  }
  const decrement = () => {
    setCountState(countState - 1)
  }
  return (
    <div>
      <h1>Le state</h1>
      <p>{countState}</p>
      <button onClick={handleClick}>Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
    </div>
  )
}
