//Affiche "La couleur est {couleur}" si la couleur est dans ["bleu", "rouge", "vert", "jaune"] et "La couleur était : {couleur} sinon

let color = prompt("Color ");
const colors = ["bleu", "rouge", "vert", "jaune"];

if (colors.indexOf(color.toLowerCase()) >= 0){
  console.log(`La couleur est ${color} !`);
} else {
  console.log(`La couleur était : ${color}`);
}
