// let age = 12;

// if (age < 10) {
//   console.log("L'age est à est ");
// } else {
//   ("la personne est majeur");
// }

try {
  let personne = {
    nom: "marie",
    prenom: "Camille",
    adresse: {
      ville: "Paris",
    },
  };

  console.log("Cette personne habite à ", personne.adresse.ville);
} catch (err) {
  console.log("probleme pour lire l'addresse: " + err);
} finally {
  console.log(" Bon je pense sans avoir l'adresse qu'elle est à Paris"); // Bloc qui s'excutera quoi qu'il arrive erreur ou pas.
}

// let taille = "L";

// switch (taille) {
//   case "s":
//     console.log("petite taille");
//     break;
//   case "m":
//     console.log("moyenne taille");
//     break;
//   case "l":
//     console.log("large taille");
//     break;
//   default:
//     console.log("taille inconnu");
// }
