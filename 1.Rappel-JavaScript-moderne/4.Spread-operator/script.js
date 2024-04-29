/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/
const array = [2, 4, 6, 8]
console.log(...array)

const shadow = [...array, 10, 12, 14]
console.log(shadow)

const obj = {
    name: "Ashuka",
    prenom: "Dior",
    age: 11,
    profession: 'Etudiant'
}

const objcopy = {...obj}
console.log(objcopy)

const objcopy1 = {...obj, name: "Isaya"}
console.log(objcopy1)
// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.



// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."

