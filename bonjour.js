// Afficher le resultat dans le terminal : node bonjour.js  , node _nomFichierJavascript

function bonjour(prenom) {
  return "bonjour " + prenom; // si je return "console.log("bonjour") ça ne fonctionne pas, il faut only return le string "bonjour"
}

// let bonjourMike = bonjour() + " Antoine";
// console.log(bonjourMike);

let bonjourPersonnalise = bonjour("Mike");
console.log(bonjourPersonnalise);

function somme(a, b) {
  return a + b;
}
console.log(somme(2, 5));// Si je ne fais pas console.log ça ne s'affiche pas dans le terminal

