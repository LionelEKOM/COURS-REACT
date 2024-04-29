/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/
const TVA = 19.75

function achat(prix) {
    return prix * (100 + TVA) / 100
}

console.log(`Prix1 : ${achat(15000)}`)
console.log(`Prix2 : ${achat(17000)}`)
console.log(`Prix3 : ${achat(2500)}`)


