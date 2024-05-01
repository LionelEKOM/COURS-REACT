import React from 'react'

function Container() {

  const isLogged = true
  let content

  if(isLogged) content = "Bienvenu sur votre contenu prive"
  else content = "Veuillez vous connecter !!!"
  
  return (
    <div>
      <p>{content}</p>
    </div>
  )
}

export default Container



// Methode 1
// export default function Container() {

//   const isLogged = false 
//   if(isLogged) {
//     return <div>
//           <h1>Rendu conditionnel</h1>
//           <p>Vous etes en ligne !!</p>
//         </div>
//   } else {
//     return <div>
//     <h1>Rendu conditionnel</h1>
//     <p>Vous n'etes pas connecte</p>
//   </div>
//   }
  
// }
