// RAPPEL DES TYPES DE DONNEES

let string = "Anthony";
let number = 24;
let boolean = true;
let maVariable; // UNDEFINED

// TABLEAUX

let array = ["Bordeaux", "Toulouse", "Nantes"];

// console.log(array[0][3]); // [Vise l'index visé]

let array2 = [
  "Bordeaux",
  24,
  true,
  [1, 2],
  {
    prenom: "Denis",
  },
];
// console.log(array2 [4].prenom);

let object = {
  pseudo: "Anthony",
  age: 24,
  techno: ["Javascript", "React", "NodeJs"],
  admin: false,
};
// object.adresse = "22 rue du code"; // ajouter un élément

// // console.log(object);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    techno: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    techno: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    techno: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

// -----------------------------
// LES STRUCTURES DE CONTROLE

// if (data[0].age > data[1].age) {
//   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
// } else {
//   console.log("faux");
// }

// // if (valeur a tester)
//       valeur si vrai
//   else
//       valeur si faux

// WHILE "TANT QUE"

// let w = 0;

// while (w < 15 ){
//   w++
//   console.log("La valeur de w est de : " + w);
// }

// Do While

// let d = 0;

// do {
//   d++;
//   console.log(d);
// } while (d < 5);

// BOUCLES FOR

for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li>`;
}
console.log(data.length);

// On déclare la valeur de i | jusqu'ou on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].techno);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}


