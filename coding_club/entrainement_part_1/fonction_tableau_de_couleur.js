//Les deux fonctions prennent en argument une liste et retournent : "{index1} : {valeur1}\n{index2} : {valeur2} ...

//vers func anonyme
let couleur1 = function (tableau) {
  let txt = ""
  for (let nb = 0; nb < tableau.length; nb++){
    txt += nb + " : " + tableau[nb] + "\n"
  }
  return txt;
}
console.log(couleur1(["bleu", "vert", "jaune"]))

//vers func fléchée

let couleur2 = (tableau) => {
  let txt = ""
  for (let nb = 0; nb < tableau.length; nb++){
    txt += nb + " : " + tableau[nb] + "\n"
  }
  return txt;
}
console.log(couleur2(["bleu", "vert", "jaune"]))
