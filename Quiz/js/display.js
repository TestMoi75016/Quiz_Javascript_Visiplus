// Toutes les fonctions dont on aura besoin pour mettre à jour l'affichage

import { countries, codePays } from "./data.js"; //mettre à jour les drapeaux

// mettre à jour un message au niveau du 'score' pr afficher egalmement 'GAMEOVER' :
export function mainMessage(msg) {
  document.querySelector("#score").textContent = msg;
}

// Enfait notre jeu se situe sur 1 seule page web donc on va juste juste jouer sur afficher/ cacher les éléments pour les différentd états du jeu
// fonction qui permet d'être en mode msg d'accueil:
export function welcomeMode() {
  document.querySelector("#action").textContent = "NOUVEAU JEU"; //mode avant de lancer une partie
  document.querySelector("#content").classList.add("hidden"); //la zone de question et réponses '#content' sera caché ici par la class CSS "hidden"
}

export function gameMode() {
  // Le bouton action permet de quitter le jeu maintenant
  document.querySelector("#action").textContent = "QUITTER JEU";
  document.querySelector("#content").classList.remove("hidden"); // delete la class hidden qui permettait de cacher les Q/A
}

export function updateScore(score) {
  document.querySelector("#score").textContent = "SCORE " + score;
}

//function qui met à jour le graphisme:
export function updateState(state) {
  // state du jeu en paramètre
  updateScore(state.score); //MAJ du score en fonction du score de l'état

  //Affichage de la question :
  document.querySelector("#quiz_content").textContent =
    countries[state.questionCode].toUpperCase(); //affiche dans l'objet countries: la valeur de clé 'state.questionCode' dc ça peut être france belgique luxembourg espagne italie
  for (let index in state.answers) {
    document.querySelector(
      `#answer${index}` // index est ici un indice car dans un for...in dans un tableau on itère sur les indices du tableau. dc j'aurai answer0, answer1...
    ).innerHTML = `<img src="https://flagcdn.com/224x168/${state.answers[index]}.png"/> `; //Pour acceder aux valeurs de l'indice : tableau[indice]
  }
}
