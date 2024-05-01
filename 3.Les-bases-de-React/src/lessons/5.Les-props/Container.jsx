import { useState } from "react"
import Card from "./Card"

export default function Container() {
  const [count, setCount] = useState("Hello Ashuka !!")
  const id = 17
  return (
    <div>
      <h1>Les props</h1>
      <h2>State du Container : { count }</h2>
      <Card id = {id} state = {count} changeState = {setCount}/ >
    </div>
  )
}
