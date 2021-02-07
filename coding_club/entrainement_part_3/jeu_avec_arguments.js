let entreeStandard = process.stdin;
let total = 13;
entreeStandard.setEncoding("utf-8");

console.log(`Arguments : ${process.argv}`);
console.log(`Taille total des arguments : ${process.argv.length}`);
if (process.argv.length < 4) {
  console.log("Pas assé d'arguments !")
  process.exit(84)
};

total = process.argv[2];
maxToTake = parseInt(process.argv[3], 10);

console.log(`Parametres :\nTotal : ${total}\nNombres de batons par coup : ${maxToTake}`);

maxToTake += 1;

entreeStandard.on("data", function (data) {
  if (data !== "\r\n" && data !== "\n") {
    if (isNaN(data)) {
      console.log("Ce n'est pas un nombre !")
    } else if (data >= maxToTake) {
      console.log(`Moins de ${maxToTake-1} !`)
    } else if (data < 1) {
      console.log("Plus de 1 !")
    } else {
      total -= data
      console.log(`Nouvelle valeur de total : ${total}`)
      console.log(`L'IA a joué : ${maxToTake-data}`)
      total -= (maxToTake-data)
      console.log(`Nouvelle valeur de total : ${total}`)
      if (total <= 0) {
        console.log("Fini !")
        process.exit(84)
      }
    }
  }
});
