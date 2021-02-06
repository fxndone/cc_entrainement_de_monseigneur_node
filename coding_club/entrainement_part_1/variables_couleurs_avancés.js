let colors = ["bleu", "vert", "jaune", "rouge", "orange", "blanc", "noir"];
let couleurs = ["bleu", "rouge", "jaune", "vert"];
let taille = colors.length;

for (let col = 0; col < taille; col++) {
  switch (col) {
    case 0:
      console.log(`La couleur à l'index ${col} est : ${couleurs[0]}`);
      break;
    case 3:
      console.log(`La couleur à l'index ${col} est : ${couleurs[1]}`);
      break;
    case 2:
      console.log(`La couleur à l'index ${col} est : ${couleurs[2]}`);
      break;
    case 1:
      console.log(`La couleur à l'index ${col} est : ${couleurs[3]}`);
      break;
    default:
      console.log(`La couleur ${colors[col]} n'était pas attendue`);
  }
}
console.log("Chez fini")
