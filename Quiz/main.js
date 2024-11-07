// Fichier qui import toutes les fonctions codés dans game.js
//* signifie que tous les exports du fichier game.js seront importés.
// as game crée un alias (game) pour tous les éléments importés de game.js.
// game devient donc un objet qui contient toutes les fonctions et variables exportées depuis game.js.
// Je peux accéder à toutes ces fonctions et variables en les préfixant par game, comme ceci :

import * as game from "./game.js"; // Semble permettre de tout importer d'un coup

let gameState = game.newGame(10); // Initialise une nouvelle partie avec 10 questions
//gameState représente l’état actuel du jeu retourné par une fonction comme newGame
console.log("État initial du jeu : ", gameState); // Affiche tout l’état initial du jeu
let goodAnswer = game.checkAnswerAndUpdateScore(gameState.questionCode);
console.log(goodAnswer);
console.log("État du jeu après vérification de la réponse :", gameState);
gameState = game.nextQuestion();
console.log("État mis à jour du jeu :", gameState);
