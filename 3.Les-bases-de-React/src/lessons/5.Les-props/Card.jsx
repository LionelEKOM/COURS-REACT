import React from 'react'
function Card({id, state, changeState}) {
  console.log(id, state);
  return (
    <div>
      {/* <p>User id {props.id}.</p>
      <p>State du parent {props.state}.</p> */}
      <p>User id {id}.</p>
      <p>State du parent {state}</p>
      <button onClick={() => changeState('Buenos Dias')}>Changer le State</button>
    </div>
  )
}

export default Card
