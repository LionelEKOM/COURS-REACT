import React, { useRef, useState } from 'react'
import { nanoid } from 'nanoid'

// Function component that creates a dynamic list of fruits with the ability to add and delete items
export default function DynamicRefSelect() {

  // Initialize a state variable 'fruits' using the useState hook from React
  // The state variable is an array of objects, where each object represents a fruit with an id and a value
  const [fruits, setFruits] = useState([
    { id: nanoid(7), value: "Pasteque" },
    { id: nanoid(7), value: "Ananas" },
    { id: nanoid(7), value: "Orange" }
  ])

  // Function to delete a fruit from the list
  // The function takes an id as an argument and filters the fruits array to remove the fruit with the matching id
  function deleteFruit(id) {
    setFruits(fruits.filter(fruit => fruit.id!== id))
  }

  // Initialize a ref using the useRef hook from React
  // The ref is an array that will be used to store references to the list items
  const fruitRef = useRef([])

  // Function to handle the ref of a list item
  // The function takes an element as an argument and checks if it is not null
  // If the element is not null, it is added to the fruitRef array
  // If the element is null, the first element in the fruitRef array is removed
  function handleRef(element) {
    if (element) {
      fruitRef.current.push(element)
    } else {
      fruitRef.current.shift()
    }
  }

  // Return the JSX for the component
  // The component returns a div containing a header, a list of fruits, and a button to add a fruit
  // Each list item has a key attribute and a ref attribute that calls the handleRef function when the list item is mounted
  // The onClick attribute of each list item calls the deleteFruit function with the id of the fruit as an argument
  return (
    <div>
      <h1>DynamicRef Selection</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id} onClick={() => deleteFruit(fruit.id)} ref={handleRef}>
            {fruit.value}
          </li>
        ))}
      </ul>
      <button onClick={() => setFruits([...fruits, { id: nanoid(7), value: "Fraise" }])}>add fruits(s)</button>
    </div>
  )
}