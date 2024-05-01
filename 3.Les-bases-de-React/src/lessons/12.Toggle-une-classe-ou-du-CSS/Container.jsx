import { useState } from "react"
import "./Container.css"

export default function Container() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur Notemania</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique debitis suscipit quos atque, 
        porro ducimus cupiditate, sit eos tenetur, 
        esse illo? Veniam delectus explicabo recusandae?</p>

        <button onClick={() => setDarkMode(!darkMode)}>
          Activer le {darkMode ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}
