import { useRef } from "react"

// Function component that creates a container with multiple input fields
export default function StaticRefSelect() {

  // Initialize a ref using the useRef hook from React
  // This ref will be used to store references to the input elements
  const inputsRef = useRef([]);

  // Function to add a reference to an input element
  // The function takes an element as an argument and checks if it is not null and not already included in the inputsRef array
  // If the element passes the checks, it is added to the inputsRef array
  function addInputRef(el) {
    if(el &&!inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
    console.log(inputsRef);
  }

  // Return the JSX for the component
  // The component returns a div containing a header and multiple input fields
  // Each input field has a ref attribute that calls the addInputRef function when the input field is mounted
  return (
    <div>
      <h1>Sélectionner un tableau d'éléments</h1>
        <input ref={addInputRef} type="text" name="" id="" />
        <input ref={addInputRef} type="text" name="" id="" />
        <input ref={addInputRef} type="text" name="" id="" />
    </div>
  )
}