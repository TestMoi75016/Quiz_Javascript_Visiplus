export let countries = {
  fr: "france",
  be: "belgique",
  lu: "luxembourg",
  es: "espagne",
  it: "italie",
  "us-ca": "Californie",
  "us-ka": "Kansas",
};
export let codePays = Object.keys(countries).filter(
  (pays) => !pays.startsWith("us")
);
console.log(codePays); // codePays est un tableau renvoyé par .filter qui contient ttes les keys qui ont passé le test

// module.exports = { countries, lespays }; // version d'export pour node.js, si je veux voir mon résultat sur le navigateur je dois utiliser l'import export standard ECMA6
