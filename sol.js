class vehicule {
  constructor(type, matricule) {
    this.type = type;
    this.matricule = matricule;
  }
}
class moto extends vehicule {
  constructor(type, matricule, vitesse_max) {
    super(type, matricule);
    this.vitesse_max = vitesse_max;
  }
}

let vehicule1 = new vehicule("ford", "DEF456");
console.log(vehicule1);
let moto1 = new moto("ford", "DEF456", 300);
console.log(moto1);
