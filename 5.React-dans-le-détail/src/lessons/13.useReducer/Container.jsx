import { useReducer } from "react"

export default function Container() {

  const[count, dispatch] = useReducer(reducer, 0)
  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'Multi':
        return state * 2
      case 'div':
        return state / 5
    }
  }

  return <div>
    <h1>Valeur du compteur : {count}</h1>
      <button
      onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}
      >Incremente</button>
      <button
      onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}
      >DECREMENT</button>
      <button
      onClick={() => dispatch({ type: "Multi", payload: 2 })}
      >Multi</button>
      <button
      onClick={() => dispatch({ type: "div", payload: 2 })}
      >div</button>
  </div>
}
