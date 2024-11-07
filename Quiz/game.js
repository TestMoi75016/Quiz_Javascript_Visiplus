// const { countries, lespays } = require("./data"); // version d'import pour node.js, si je veux voir mon résultat sur le navigateur je dois utiliser l'import export standard ECMA6
import { countries } from "./data.js";
import { codePays } from "./data.js";

export let state = {}; // La variable state = objet qui joue le rôle d'un état global du jeu. c'est-à-dire qu'elle stocke toutes les informations nécessaires pour suivre la progression de la partie et pour conserver des données importantes à chaque étape. // le regroupe donc plusieurs éléments qui représentent l'état actuel du jeu, comme le score du joueur, la question en cours, le nombre total de questions, etc.
//plus tard ds le code quand on écrit state.quelqueChose alors que state est initialement un objet vide (state = {}), on ajoute dynamiquement une nouvelle propriété à l'objet state.

const randomInt = (number) => {
  let randomNumber = Math.random(); // Math.random() ne peut jamais être égal à 1. En JavaScript, Math.random() génère un nombre flottant entre 0 (inclus) et 1 (exclus). Cela signifie que le résultat de Math.random() est toujours inférieur à 1.
  return Math.floor(randomNumber * number); // Ex: 0,9x5 = 4,5, 0,5x5 = 2,5 mais ce sera toujours arrondi à l'entier inférieur donc 4 et 2 pour  0,5x5 = 2,5
};

// console.log(randomInt(2));
// console.log(lespays);

//-- Fonction qui séléctionne aléatoirement 4 codes de pays et les met dans [] state.answer
export function nextQuestion() {
  state.currentQuestion += 1; // Incrémente le compteur de question. Quand on écrit state.quelqueChose alors que state est initialement un objet vide (state = {}), on ajoute dynamiquement une nouvelle propriété à l'objet state.
  state.answers = []; // (answer = réponse.) Initialise un tableau vide pour stocker les réponses
  while (state.answers.length < 4) {
    // Ajoute des codes (propriété de pays) de pays jusqu'à ce qu'il y ait 4 éléments uniques dans le []`state.aswers`
    let nextIndex = randomInt(codePays.length); // nextIndex est une variable utilisée pour stocker un index aléatoire. Cet index est ensuite utilisé pour sélectionner un code de pays au hasard dans le tableau codePays.
    let possibleAnswer = codePays[nextIndex]; // un code pays au hasard.  codePays[nextIndex] est utilisé pour accéder à une clé de l'objet countries qui se trouve dans le tableau codePays. | une question = une clé pays stockée dans le [] codePays
    if (state.answers.indexOf(possibleAnswer) === -1) {
      // En JavaScript, la méthode .indexOf() retourne automatiquement -1 si l’élément recherché n’est pas trouvé dans le tableau.
      // Cette ligne vérifie si une réponse potentielle (dans la variable nextAnswer) n'est pas déjà présente dans le tableau state.answers.
      // verifie qu'on a pas deja la reponse parmi les réponses possibles
      state.answers.push(possibleAnswer);
    }
  }
  state.questionCode = state.answers[randomInt(4)]; // randomInt sera toujours entre 0 et 3 ce qui correspond au nombre d'index du tableau possible dans state.codePays qui contient 4 codes aux index 0 1 2 et 3
  return state; // permet de renvoyer l'état actuel du jeu à la fonction ou au code appelant. (placé après la boucle while, sinon la boucle s’arrêtera après la première itération.)
}

//Vérifier réponse de l'utilisateur (en_paramètre)
export function checkAnswerAndUpdateScore(answer) {
  if (answer === state.questionCode) {
    //answer =  la réponse du joueur, si elle est === à la bonne réponse stockée dans state.questionCode alors :
    state.score += 1;
    return true;
  } else {
    return false;
  }
}

// Fonction qui gère le démarrage du jeu.
export function newGame(totalQuestions) {
  state.score = 0;
  state.currentQuestion = 0;
  state.totalQuestions = totalQuestions; // totalQuestions = le nombre total de questions
  return nextQuestion(); // Parce que nextQuestion est la fonction qui va proposer 4 code pays aléatoirement comme choix possible de réponses
}
