const personage = {
  nom: "Jean",
  prenom: "Eud",
  sexe: "un homme",
  tenue: "un sweet a capuche",
  sac_a_dos: ["2 clef USB", "7 sandwich", "1 telephone"],
  presentation() {
    return (`Bonjour !\nJe me nomme ${this.nom} ${this.prenom}, enchanté !`);
  },
  description(){
    return (`Je suis ${this.sexe} nommé ${this.nom} ${this.prenom}, j'ai actuelement dans mon sac :\n${this.sac_a_dos.join("\n")}\nAh et j'ai ${this.tenue} aussi`);
  },
  tri(){
    let liste = this.sac_a_dos;
    let final = [];
    for (let indx = 0; indx < liste.length; indx++){
      let obj = liste[indx];
      let nom = "";
      for (let caran = 0; caran < obj.length; caran++){
        let cara = obj[caran];
        let nom_min = "";
        if (cara <= 'z' && cara >= 'a') {
          nom_min += cara;
        } else if (cara <= 'Z' && cara >= 'A') {
          nom_min += cara.toLowerCase();
        }
        nom += nom_min;
      }
      final[final.length] = nom;
    }
    final.sort()
    return final
  }
};
console.log(personage.tri());
