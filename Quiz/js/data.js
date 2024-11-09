export let countries = {};

export let codePays = [];

//function pr charger les pays
export function loadCountries() {
  const url = "https://flagcdn.com/fr/codes.json";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      countries = data;
      codePays = Object.keys(countries).filter(
        (pays) => !pays.startsWith("us") // on vire les  keys et valeur us car on connait pas drapeau des Etats américains
      );
    }); // fetch renvoie une promise de réponse
}

// export let codePays = Object.keys(countries).filter(
//   (pays) => !pays.startsWith("us")
// );
// console.log(codePays); // codePays est un tableau renvoyé par .filter qui contient ttes les keys qui ont passé le test

// module.exports = { countries, lespays }; // version d'export pour node.js, si je veux voir mon résultat sur le navigateur je dois utiliser l'import export standard ECMA6
