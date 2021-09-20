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

// LES SWITCH --------------


document.body.addEventListener("click", (e) => {
//   console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
  }

  switch (e.target.id) {
    case "php":
      document.body.style.background = "red";
      break;
  }

  switch (e.target.id) {
    case "python":
      document.body.style.background = "blue";
      break;
    default:
        null;
  }
});

//--------------------------------------------------
// LES METHODES STRING 

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof string2);
// console.log(eval("1" + 2));
// console.log(eval(parseInt("1") + 2)); (Change le string en number);
// console.log(isNaN(string)); Interroge si c'est un chiffre true/false
// console.log(string2.length); (Calcule la longueur des chaines caractères);
// console.log(string2[string2.length - 1]); selectionne le dernier caractères;

// console.log(string2.indexOf("orienté"));
// console.log(string2.indexOf('x')); RETOURNE -1 si il ne connait pas

// let newString = string2.slice(5, 17); SLICE = Decoupe chaine de caractère
// console.log(newString);

// console.log(string2.split("i")); PERMET DE REDECOMPOSER 

// console.log(string2.toUpperCase()); 
// console.log(string2.toLowerCase());

// console.log(string2.replace("Javascript", "PHP")); REMPLACE LE PREMIER MOT PAR LE SECOND

// -----------------------------------------------------------
// LES METHODES NUMBER

let number2 = 42.1234;
let numberString = "42.12 est un chiffre"
// console.log(number2.toFixed(2)); GARDER UN CERTAINS NOMBRE DE CHIFFRE APRES LA VIRGULE

// console.log(parseInt("43"));
// console.log(parseInt(numberString)); GARDE UN CHIFFRE
// console.log(parseFloat(numberString)); GARDE UN CHIFFRE MEME APRES LA VIRGULE

// console.log(Math.PI);
// console.log(Math.round(4.5)); ARRONDI AU PLUS PRES 
// console.log(Math.floor(4.9)); ARRONDI A L'INFERIEUR
// console.log(Math.ceil(4.1)); ARRONDI AU PLUS HAUT 



