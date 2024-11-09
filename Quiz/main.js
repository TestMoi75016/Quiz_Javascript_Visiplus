// Fichier qui import toutes les fonctions codés dans game.js
//* signifie que tous les exports du fichier game.js seront importés.
// as game crée un alias (game) pour tous les éléments importés de game.js.
// game devient donc un objet qui contient toutes les fonctions et variables exportées depuis game.js.
// Je peux accéder à toutes ces fonctions et variables en les préfixant par game, comme ceci :

import * as game from "./game.js"; // Semble permettre de tout importer d'un coup
import { countries, codePays } from "./data.js";

//fonction qui met à jour le jeu
function updateState() {
  game.nextQuestion();
  document.querySelector("#question").textContent =
    countries[game.state.questionCode].toUpperCase();
  for (let index in game.state.answers) {
    document.querySelector(
      `#answer${index}` // index est ici un indice car dans un for...in dans un tableau on itère sur les indices du tableau. dc j'aurai answer0, answer1...
    ).innerHTML = `<img src="https://flagcdn.com/224x168/${game.state.answers[index]}.png"/> `; //Pour acceder aux valeurs de l'indice : tableau[indice]
  }
}

function startGame() {
  game.newGame(10); // on joue newGame avec 10 questions
  document
    .querySelectorAll("#answers button") // Tous les bouttons qui se trouve dans la div à l'id #answers,
    .forEach((button) => (button.onclick = updateState)); // à chaque click sur un boutton on joue la updateState() qui updatera surement l'état du jeu
  // updateState (sans parenthèses) : ici, vous référencez simplement la fonction updateState sans l'exécuter. updateState et l'exécutera uniquement lorsque l'événement onclick se produit
  updateState(); // Je mets à jour le jeu
}

function gameOpening() {
  let actionButton = document.getElementById("action");
  actionButton.onclick = startGame; // onclick = event quand on click sur le boutton action
}

window.onload = gameOpening; // Chargement de la page = fonction gameOpening qui se jouera.
