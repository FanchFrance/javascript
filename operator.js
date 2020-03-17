
// CONSTANTE TERNAIRE
const age = 24;
const age2 = "24";

 const operator = age == age2 ? "ok": "ko";

console.log(operator);

// const operator = condition ? retour condition 1 : retour condition 2

// exemple ci dessous d'une condition dans une autre condition mais à ne pas faire!! il vaut mieux utiliser des switch

const operator2 = age == age2 ? (!age ?"Pas d'âge": "Age") : "ko"; 

const ageJohn = 24
const ageBarbara = 28
const agePatrick = 32
const ageBenjamin = 17
const ageSylvie = 36

const ageJohn = 24;
const ageBarbara = 28;
const agePatrick = 32;
const ageBenjamin = 17;
const ageSylvie = 36;

// calcul somme des ages
const ageTotal = ageJohn + ageBarbara + agePatrick + ageBenjamin + ageSylvie;
console.log(ageTotal);

// calcul moyenne d'age

console.log(ageTotal / 5);

// difference age entre plus jeune et plus vieux

const oldestAge = Math.max(
  ageJohn,
  ageBarbara,
  agePatrick,
  ageBenjamin,
  ageSylvie
);
const youngestAge = Math.min(
  ageJohn,
  ageBarbara,
  agePatrick,
  ageBenjamin,
  ageSylvie
);

const difference = oldestAge - youngestAge;
console.log(difference);

// afficher true ou false si ecart age > 10 ans

const differenceAge2 = difference > 10 ? true : false;
console.log(differenceAge2);

// show true or false John and Benjamin are under 25

const differenceAge3 = ageJohn < 25 && ageBenjamin < 25 ? true : false;
console.log(differenceAge3);

const oldest =
  ageSylvie < 35 ? "There's no over 35" : "At least one is over 35";
console.log(oldest);
