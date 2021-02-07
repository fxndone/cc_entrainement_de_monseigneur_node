let entreeStandard = process.stdin;
let total = 13;
entreeStandard.setEncoding("utf-8");


entreeStandard.on("data", function (data) {
  if (data !== "\r\n" && data !== "\n") {
    if (isNaN(data)) {
      console.log("Ce n'est pas un nombre !")
    } else if (data > 3) {
      console.log(`Moins de 4 !`)
    } else if (data < 1) {
      console.log("Plus de 1 !")
    } else {
      total -= data
      console.log(`Nouvelle valeur de total : ${total}`)
      console.log(`L'IA a joué : ${4-data}`)
      total -= (4-data)
      console.log(`Nouvelle valeur de total : ${total}`)
      if (total <= 0) {
        console.log("Fini !")
        process.exit()
      }
    }
  }
});
