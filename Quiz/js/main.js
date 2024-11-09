// Fichier qui import toutes les fonctions codés dans game.js
//* signifie que tous les exports du fichier game.js seront importés.
// as game crée un alias (game) pour tous les éléments importés de game.js.
// game devient donc un objet qui contient toutes les fonctions et variables exportées depuis game.js.
// Je peux accéder à toutes ces fonctions et variables en les préfixant par game, comme ceci :

import * as game from "./game.js"; // Semble permettre de tout importer d'un coup
import { loadCountries } from "./data.js";
import * as display from "./display.js";

//fonction qui met à jour le jeu
// function updateState() {
//   game.nextQuestion();
//   document.querySelector("#question").textContent =
//     countries[game.state.questionCode].toUpperCase();
//   for (let index in game.state.answers) {
//     document.querySelector(
//       `#answer${index}` // index est ici un indice car dans un for...in dans un tableau on itère sur les indices du tableau. dc j'aurai answer0, answer1...
//     ).innerHTML = `<img src="https://flagcdn.com/224x168/${game.state.answers[index]}.png"/> `; //Pour acceder aux valeurs de l'indice : tableau[indice]
//   }
// }
function verifyAnswer() {
  const userAnswerIndex = this.id.slice(-1); //Voir read.me. récupération de l'id de la réponse choisie par l'user. Ici, this.id.slice(-1) extrait le dernier caractère de l'ID du bouton cliqué (qui est un chiffre 0 1 2 3 ou 4 car answer0 etc..) pour obtenir l'index de la réponse
  const userAnswer = game.state.answers[userAnswerIndex];
  game.checkAnswerAndUpdateScore(userAnswer);
  if (game.state.currentQuestion < game.state.totalQuestions) {
    game.nextQuestion();
    display.updateState(game.state);
  } else {
    display.mainMessage("GAME OVER - SCORE: " + game.state.score);
    gameOpening();
  }
}

function startGame() {
  display.gameMode(); // MAJ du display pour qu'il passe en gameMode au niveau de l'affichage
  let actionButton = document.getElementById("action");
  actionButton.onclick = gameOpening;
  game.newGame(10); // on joue newGame avec 10 questions
  document
    .querySelectorAll("#answers button") // Tous les bouttons qui se trouve dans la div à l'id #answers,
    .forEach((button) => (button.onclick = verifyAnswer)); // à chaque click sur un boutton on vérifie la réponse si elle est correct
  // verifyAnswer (sans parenthèses) : ici, vous référencez simplement la fonction verifyAnswer sans l'exécuter. verifyAnswer l'exécutera uniquement lorsque l'événement onclick se produit
  display.updateState(game.state); // Je mets à jour le score
}

function gameOpening() {
  display.welcomeMode(); // MAJ le display pr qu'il soit en mode welcome
  let actionButton = document.getElementById("action");
  actionButton.onclick = startGame; // onclick = event quand on click sur le boutton action
}
loadCountries(); // La fonction loadCountries() est placée avant window.onload = gameOpening; pour s'assurer que les données des pays (chargées depuis l'API) sont disponibles avant de démarrer l'interface du jeu.
window.onload = gameOpening; // Chargement de la page = fonction gameOpening qui se jouera.
