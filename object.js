
const wilder = {
  name:"François",
  city:"Bordeaux",
  age:24,
  isLearningJs:true,
};

console.log(wilder.hasOwnProperty("name"));
console.log(wilder.hasOwnProperty("isLearningJs"));
console.log(wilder.hasOwnProperty("isLearningPhp"));


console.log(wilder["name"] !== undefined);
console.log(wilder["isLearningJs"] !== undefined);
console.log(wilder["isLearningPhp"] !== undefined);

console.log(wilder["name"]);
console.log(wilder["isLearningJs"]);
console.log(wilder["isLearningPhp"]);

wilder.knowsHTML=true;

wilder.knowsCSS=true;

wilder.hobbies= ["eating","sleeping","coding", "washing my body"]

delete wilder.name;

wilder.firstName="Yhuel"
wilder.lastName="François"

for(let name in wilder){
  console.log("ikkk")
  console.log(name, wilder[name]);
};
