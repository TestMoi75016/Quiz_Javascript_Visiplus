let nombre = 0;

// while (nombre <= 10) {
//   if (nombre === 7) {
//     break; // Ce if sert à sortir du while si le chiffre 7 est atteint par la boucle while, avant même qu'elle n'arrive à 10
//   }
//   console.log(nombre * nombre);
//   nombre++;
// }

// pareil pour le for
// console.log("----------");

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     break; // Encore une fois cette ligne permet de sortir de la condition 'for' dès que 'i' atteint 7
//   }
//   console.log(nombre * nombre);
//   nombre++;
// }

// Avec le mot "CONTINUE"
console.log("----------");

for (nombre = 0; nombre < 10; nombre++) {
  if (nombre === 7) {
    continue; //  le mot-clé continue est utilisé, ce qui provoque le passage direct à l'itération suivante sans exécuter les instructions de cette itération quand i===7
  }
  console.log(nombre * nombre);
}

//---------------------------------------------------------
// for... of  avec un tableau | for ... in avec un objet
//---------------------------------------------------------

// mon clé 'of' dans un 'for' avec un TABLEAU:
console.log("----------");
let nombres = [1, 6, 8, 15];

for (let monNombre of nombres) {
  // indique que je veux l'ensemble des nombres compris ds 'nombre' et je stock ça ds variable monNombre
  console.log(monNombre * monNombre); // log 1 36 64 225 donc les carrés de chaque nombre du tableau nombre stocké monNombre.  Stocker mon tableau dans une variable grace à 'of' et cette variable la multiplier par elle même
}

// Pareil avec des OBJETS avec le mot clé 'in', for...in:
let point = {
  x: 1,
  y: 2,
  z: 3,
};
for (let coord in point) {
  // en utilisant le mot clé 'in' j'itère sur les KEYS de mon objet 'point', je mets tous mes keys de point dans 'coord'
  console.log(`Coordonné ${coord} vaut ${point[coord]}`); // pour accèder à la VALEUR de la propriété de l'objet , il faut utiliser des [] sur la clé. ex: nom_objet[x] me donnerait 1, la je fais nom_objet[coord] car coord contient chaque clé de l'objet à chaque itération .
}
//log: Coordonné x vaut 1 | Coordonné y vaut 2 | Coordonné z vaut 3
