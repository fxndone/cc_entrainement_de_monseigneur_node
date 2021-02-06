//Cet objet créé un personnage et lui attribu un nom, un prenom, un sexe, une tenue ...

const personage = {
  nom: "Jean",
  prenom: "Eud",
  sexe: "un homme",
  tenue: "un sweet a capuche",
  sac_a_dos: ["clef USB", "sandwich", "sandwich", "sandwich"],
  presentation() {
    return (`Bonjour !\nJe me nomme ${this.nom} ${this.prenom}, enchanté !`);
  },
  description(){
    return (`Je suis ${this.sexe} nommé ${this.nom} ${this.prenom}, j'ai actuelement dans mon sac :\n${this.sac_a_dos.join("\n")}\nAh et j'ai ${this.tenue} aussi`);
  }
};
console.log(personage.presentation())
