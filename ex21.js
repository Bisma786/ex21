"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let boquet = {
    name: "Heavenly",
    price: 400,
    description: "Heavenly arrangements of beautiful flowers"
};
// define an array of objects
let boquets = [];
boquets.push();
boquets.push({ name: "Rose",
    price: 500,
    description: "Fresh rose arrangements " });
let thirdb = {
    name: "Water Lilies",
    price: 600,
    description: "Sweet smelling flowers with beautiful management "
};
boquets.push(thirdb);
console.log(boquets);
boquets.push({ name: "White Angelic", price: 700, description: "A sweet enhancing arrangement of white Jasmine flowers" });
console.log(boquets);
for (let i of boquets) {
    console.log(`title:${i.name}
    description${i.description}
    price:${i.price}
    _______________\n`);
}
;
`

displayboquets(boquets);
;
