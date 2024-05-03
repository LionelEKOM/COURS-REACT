import { useEffect, useState } from "react"
import "./Container.css"

export default function Container() {

  const[count, setCount] = useState(0)
  console.log(count);

  useEffect(() => {
    console.log("Apres premiere creation et apres mise a jour du DOM")
  }, [])
  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>increment +1</button>
    </div>
  )
}
