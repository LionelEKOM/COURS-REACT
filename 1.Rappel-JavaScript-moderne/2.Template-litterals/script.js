/* 
  Les "template literals" ou "template strings" sont des chaînes utilisant une syntaxe extrêmement pratique.
  
  On peut les utiliser pour :
  - Intégrer des expressions JS à une chaîne
  - Intégrer des sauts de ligne
  - Concaténer des chaînes
  - Créer des templates (morceau de code).

  On crée un gabarit(traduction fr) en utilisant les backticks ``.
  Pour intégrer une expression, on utilise la syntaxe ${expression} entre les backticks.
*/

/* Ajout d'expression */
const a = 10
const b = 5

console.log("Solution de a + b = ", a+b)
console.log(`Solution de a + b = ${a + b}`)

/* Saut de ligne */
console.log("Hello \n World !!")
console.log(`Hello 
World !!`)

function foo () {
  return "abcdef..."
}
console.log(`L'alphabet francais a : ${foo()}`)


/* Utilisation de l'expression retournée par une fonction. */
